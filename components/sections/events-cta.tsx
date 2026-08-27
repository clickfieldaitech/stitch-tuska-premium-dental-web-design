"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

export function EventsCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--turquoise)] px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[var(--gold)]/25 blur-3xl" aria-hidden />

          <h2 className="relative text-balance font-heading text-4xl font-medium text-white sm:text-5xl">
            Building Healthier Smiles Beyond the Clinic
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-white/85">
            Through community initiatives and awareness programs, Tuskaè continues to make pediatric
            dental care accessible and meaningful for every child.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-[var(--turquoise-dark)] hover:bg-white/90"
              render={
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                </a>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}