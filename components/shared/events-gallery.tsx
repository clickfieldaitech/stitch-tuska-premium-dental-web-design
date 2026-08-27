"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { EventItem } from "@/types/content";

// Pinterest-style masonry: each photo keeps its natural aspect ratio (no forced
// cropping), so faces and bodies are always fully visible without cropping.
// Mirrors the GalleryGrid pattern used on the /gallery page.
export function EventsGallery({ items }: { items: EventItem[] }) {
  const [active, setActive] = useState<EventItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <motion.button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(item)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={i}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl text-left"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl">
              <span className="flex items-center gap-2 p-4 text-sm font-medium text-white">
                <ZoomIn className="h-4 w-4" /> View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          {active && (
            <div className="relative">
              <Image
                src={active.src}
                alt={active.title}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="max-h-[80vh] w-auto rounded-2xl object-contain"
              />
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mt-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                  {active.category}
                </p>
                <p className="mt-1 font-heading text-xl text-white">{active.title}</p>
                {active.description && (
                  <p className="mx-auto mt-1 max-w-md text-sm text-white/80">{active.description}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}