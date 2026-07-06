"use client"

import { Heart, PenLine } from "lucide-react"
import { useMemo, useState } from "react"
import { RSVPSubmitState } from "./rsvp-submit-state"

type Attendance = "yes" | "no" | ""

type RSVPFormState = {
  name: string
  phone: string
  guests: string
  attendance: Attendance
  message: string
}

type RSVPFormErrors = Partial<Record<keyof RSVPFormState, string>>

const initialFormState: RSVPFormState = {
  name: "",
  phone: "",
  guests: "1",
  attendance: "",
  message: "",
}

function validateForm(form: RSVPFormState): RSVPFormErrors {
  const errors: RSVPFormErrors = {}
  const phoneDigits = form.phone.replace(/\D/g, "")
  const guestCount = Number(form.guests)

  if (form.name.trim().length < 2) {
    errors.name = "Vui lòng nhập tên để tụi mình biết ai đang hồi đáp."
  }

  if (phoneDigits.length < 9 || phoneDigits.length > 11) {
    errors.phone = "Số điện thoại nên có từ 9 đến 11 chữ số."
  }

  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10) {
    errors.guests = "Số khách mời nên nằm trong khoảng 1 đến 10."
  }

  if (!form.attendance) {
    errors.attendance = "Vui lòng chọn bạn có thể tham dự hay không."
  }

  return errors
}

export function RSVPGlassPanel() {
  const [form, setForm] = useState<RSVPFormState>(initialFormState)
  const [touched, setTouched] = useState<RSVPFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => validateForm(form), [form])
  const visibleErrors = Object.fromEntries(Object.entries(errors).filter(([key]) => touched[key as keyof RSVPFormState])) as RSVPFormErrors

  const updateField = (field: keyof RSVPFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const markTouched = (field: keyof RSVPFormState) => {
    setTouched((current) => ({ ...current, [field]: "true" }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(form)

    if (Object.keys(nextErrors).length > 0) {
      setTouched({
        name: "true",
        phone: "true",
        guests: "true",
        attendance: "true",
      })
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return <RSVPSubmitState name={form.name} attendance={form.attendance} onReset={() => setSubmitted(false)} />
  }

  return (
    <div className="rsvp-panel relative overflow-hidden rounded-[2.5rem] border border-white/68 bg-white/64 p-5 shadow-[0_30px_92px_rgba(72,55,38,0.14),0_1px_0_rgba(255,255,255,0.84)_inset] backdrop-blur-2xl md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#D9CCFF]/38 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-[#F4C96B]/22 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <div className="relative z-10 mb-7 flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#32162F] text-white shadow-[0_14px_34px_rgba(50,22,47,0.22)]">
          <PenLine className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF8517] [font-family:Arial,Helvetica,sans-serif]">
            Sign the invitation
          </p>
          <h3 className="mt-2 text-3xl font-black leading-none text-[#071936] [font-family:Arial,Helvetica,sans-serif] md:text-5xl">
            Lời hồi đáp
          </h3>
          <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-[#8B8175] md:text-base">
            Cho tụi mình biết bạn có thể đến chung vui không nhé.
          </p>
        </div>
      </div>

      <form className="relative z-10 grid gap-5" noValidate onSubmit={onSubmit}>
        <Field
          id="rsvp-name"
          label="Tên của bạn"
          value={form.name}
          error={visibleErrors.name}
          autoComplete="name"
          placeholder="Ví dụ: Nguyễn Minh Anh"
          onBlur={() => markTouched("name")}
          onChange={(value) => updateField("name", value)}
        />

        <Field
          id="rsvp-phone"
          label="Số điện thoại"
          type="tel"
          value={form.phone}
          error={visibleErrors.phone}
          autoComplete="tel"
          inputMode="tel"
          placeholder="Ví dụ: 0901234567"
          onBlur={() => markTouched("phone")}
          onChange={(value) => updateField("phone", value)}
        />

        <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr]">
          <Field
            id="rsvp-guests"
            label="Số khách"
            type="number"
            value={form.guests}
            error={visibleErrors.guests}
            min={1}
            max={10}
            inputMode="numeric"
            onBlur={() => markTouched("guests")}
            onChange={(value) => updateField("guests", value)}
          />

          <fieldset>
            <legend className="mb-3 text-sm font-black uppercase text-[#071936] [font-family:Arial,Helvetica,sans-serif]">
              Xác nhận tham dự
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <AttendanceOption
                id="rsvp-attend-yes"
                name="attendance"
                checked={form.attendance === "yes"}
                label="Sẽ tham dự"
                description="Mình sẽ có mặt trong ngày vui."
                onChange={() => {
                  updateField("attendance", "yes")
                  markTouched("attendance")
                }}
              />
              <AttendanceOption
                id="rsvp-attend-no"
                name="attendance"
                checked={form.attendance === "no"}
                label="Không tham dự"
                description="Mình gửi lời chúc từ xa."
                onChange={() => {
                  updateField("attendance", "no")
                  markTouched("attendance")
                }}
              />
            </div>
            {visibleErrors.attendance && <ErrorText id="rsvp-attendance-error">{visibleErrors.attendance}</ErrorText>}
          </fieldset>
        </div>

        <label className="block">
          <span className="text-sm font-black uppercase text-[#071936] [font-family:Arial,Helvetica,sans-serif]">
            Lời nhắn tùy chọn
          </span>
          <textarea
            id="rsvp-message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={4}
            className="rsvp-input mt-3 min-h-32 w-full resize-none rounded-[1.5rem] border border-[#E8D4B5] bg-white/74 p-5 text-base font-semibold leading-7 text-[#32162F] outline-none transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-[#8B8175]/62 focus:border-[#D9CCFF] focus:bg-white/90 focus:shadow-[0_0_0_5px_rgba(217,204,255,0.32),0_18px_42px_rgba(72,55,38,0.1)]"
            placeholder="Gửi một lời chúc nhỏ đến cô dâu chú rể..."
          />
        </label>

        <button
          type="submit"
          className="group mt-1 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FF8517] px-8 text-base font-black text-white shadow-[0_18px_42px_rgba(255,138,28,0.28),0_0_0_1px_rgba(255,255,255,0.42)_inset] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [font-family:Arial,Helvetica,sans-serif] hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(255,138,28,0.34),0_0_0_1px_rgba(255,255,255,0.52)_inset] focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70 active:translate-y-0 md:w-fit"
        >
          <Heart className="h-5 w-5 transition duration-500 group-hover:scale-110" />
          Gửi lời hồi đáp
        </button>
      </form>

      <style jsx>{`
        .rsvp-panel {
          animation: rsvp-panel-rise 980ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes rsvp-panel-rise {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  error?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  min?: number
  max?: number
  onBlur: () => void
  onChange: (value: string) => void
}

function Field({ id, label, value, error, type = "text", placeholder, autoComplete, inputMode, min, max, onBlur, onChange }: FieldProps) {
  const errorId = `${id}-error`

  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-black uppercase text-[#071936] [font-family:Arial,Helvetica,sans-serif]">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        min={min}
        max={max}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className="rsvp-input mt-3 h-[3.25rem] min-h-[3.25rem] w-full rounded-full border border-[#E8D4B5] bg-white/74 px-5 text-base font-semibold text-[#32162F] outline-none transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-[#8B8175]/62 focus:border-[#D9CCFF] focus:bg-white/90 focus:shadow-[0_0_0_5px_rgba(217,204,255,0.32),0_18px_42px_rgba(72,55,38,0.1)]"
        placeholder={placeholder}
      />
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </label>
  )
}

function AttendanceOption({
  id,
  name,
  checked,
  label,
  description,
  onChange,
}: {
  id: string
  name: string
  checked: boolean
  label: string
  description: string
  onChange: () => void
}) {
  return (
    <label
      htmlFor={id}
      className={`block cursor-pointer rounded-[1.4rem] border p-4 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:ring-4 focus-within:ring-[#D9CCFF]/70 ${
        checked
          ? "border-[#D9CCFF] bg-white/88 shadow-[0_0_0_5px_rgba(217,204,255,0.25),0_18px_42px_rgba(72,55,38,0.1)]"
          : "border-[#E8D4B5] bg-white/58 hover:-translate-y-0.5 hover:bg-white/78 hover:shadow-[0_14px_34px_rgba(72,55,38,0.08)]"
      }`}
    >
      <span className="flex items-start gap-3">
        <input id={id} name={name} type="radio" checked={checked} onChange={onChange} className="mt-1 h-4 w-4 accent-[#FF8517]" />
        <span>
          <span className="block text-sm font-black uppercase text-[#071936] [font-family:Arial,Helvetica,sans-serif]">{label}</span>
          <span className="mt-1 block text-sm font-semibold leading-5 text-[#8B8175]">{description}</span>
        </span>
      </span>
    </label>
  )
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 text-sm font-semibold leading-5 text-[#B42342]" role="alert">
      {children}
    </p>
  )
}
