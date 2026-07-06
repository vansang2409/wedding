type MapActionProps = {
  icon: React.ReactNode
  label: string
  value?: string
  href: string
}

export function MapAction({ icon, label, value, href }: MapActionProps) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[#6F5598]/15 bg-white/58 text-[#6F5598]">
        {icon}
      </div>
      <div>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#6F6575]">Link gg map</p>
        <p className="mt-2 text-lg font-medium leading-7 text-[#201939] [font-family:var(--journey-serif)] md:text-xl">{value}</p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#6F5598] transition hover:text-[#D9A55A] focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
        >
          {label} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
