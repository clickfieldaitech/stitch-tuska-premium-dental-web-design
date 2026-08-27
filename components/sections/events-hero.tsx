"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

// Bespoke hero for /events — mirrors the PageHero typography/spacing/colors but
// adds the requested subheading line ("Smiles in Action, Care in Community").
export function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--aqua)]/25 via-[var(--cream)] to-[var(--cream)] pb-20 pt-40 sm:pt-48">
      <div className="container-narrow relative text-center">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--turquoise-dark)]"
        >
          Community Outreach &amp; Care
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="text-balance font-heading text-5xl font-medium text-[var(--ink)] sm:text-6xl"
        >
          Events
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-4 font-heading text-xl italic text-[var(--turquoise-dark)] sm:text-2xl"
        >
          Smiles in Action, Care in Community
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mx-auto mt-5 max-w-xl text-balance text-[var(--ink-muted)]"
        >
          At Tuskaè, we believe dental care goes beyond the clinic. We actively participate in
          community outreach, screening camps, and oral health awareness programs to build a
          healthier, brighter future for children.
        </motion.p>
      </div>
    </section>
  );
}