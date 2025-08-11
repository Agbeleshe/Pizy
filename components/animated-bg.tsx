"use client"

import * as React from "react"

export default function AnimatedBg() {
  // Adds animated gradient blobs and a subtle grid
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      {/* Blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-12 h-72 w-72 rounded-full bg-yellow-300/40 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl animate-blob animation-delay-4000" />
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-10px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 12s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
