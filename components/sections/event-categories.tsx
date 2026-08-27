"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { iconMap } from "@/components/shared/icon-map";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { EventCategory } from "@/types/content";

export function EventCategories({ categories }: { categories: EventCategory[] }) {
  return (
    <section className="bg-[var(--aqua)]/20 py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Do"
          title="Our community initiatives"
          description="Three ways Tuskaè brings pediatric oral care to the community — beyond the clinic walls."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i}
              >
                <div className="group relative flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_2px_20px_-8px_rgba(35,48,59,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(101,199,201,0.35)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--aqua)]/40 text-[var(--turquoise-dark)] transition-colors duration-500 group-hover:bg-[var(--turquoise)] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl lg:text-2xl text-[var(--ink)]">
                    {category.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {category.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-[var(--aqua)]/30 px-3 py-1 text-xs font-medium text-[var(--turquoise-dark)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}