"use client"

import { useState } from "react"

export default function IntroScreen({ onOpen }: { onOpen: () => void }) {
    const [show, setShow] = useState(true)

    const handleOpen = () => {
        setShow(false)
        onOpen()
    }

    if (!show) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F3E8FF]/80 backdrop-blur-md" onClick={handleOpen}>

            {/* Card */}
            <div className="w-[90%] max-w-[700px] rounded-2xl bg-gradient-to-t from-violet-50 to-purple-100 shadow-2xl py-24 px-10 text-center">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl text-purple-400 font-display mb-12">
                    The Wedding Invitation
                </h2>

                {/* Heart button */}
                <button
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full 
          bg-gradient-to-t from-violet-50 to-violet-600
          shadow-xl hover:scale-110 transition"
                >
                    <span className="text-white flex items-center justify-center text-[60px] font-display">❤</span>
                </button>

                {/* Instruction */}
                <p className="text-purple-400 text-lg mt-10">
                    Chạm để mở thiệp
                </p>

                {/* Couple name */}
                <h1 className="text-[clamp(23px,6vw,50px)] font-display text-gray-800 text-center">
                    Văn Sang <span className="text-purple-300">&</span> Thu Thương
                </h1>

            </div>

        </div>
    )
}