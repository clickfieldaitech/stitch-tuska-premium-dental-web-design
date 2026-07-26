"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  const initial = testimonial.name.charAt(0).toUpperCase();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={index}
      className="relative flex h-full flex-col rounded-3xl border border-white/40 bg-white/60 p-8 shadow-[0_8px_32px_-12px_rgba(35,48,59,0.15)] backdrop-blur-xl"
    >
      <Quote className="h-8 w-8 text-[var(--gold)]/60" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--ink)]">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--turquoise)]/15 text-[var(--turquoise-dark)]">
          <span className="font-heading text-lg font-semibold">{initial}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--ink)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--ink-muted)]">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}