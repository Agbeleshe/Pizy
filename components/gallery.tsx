"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState<{ src: string; alt: string } | null>(null)

  function onOpen(img: { src: string; alt: string }) {
    setActive(img)
    setOpen(true)
  }

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onOpen(img)}
            className="group relative overflow-hidden rounded-xl border"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src || "/placeholder.svg"}
              width={1200}
              height={900}
              alt={img.alt}
              className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-0 p-0">
          {active ? (
            <Image
              src={active.src || "/placeholder.svg"}
              width={1600}
              height={1200}
              alt={active.alt}
              className="h-auto w-full rounded-xl"
              priority
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
