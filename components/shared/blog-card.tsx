"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { Blog } from "@/types/content";

export function BlogCard({ blog, index = 0 }: { blog: Blog; index?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={index}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group relative flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_2px_20px_-8px_rgba(35,48,59,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(101,199,201,0.35)]"
      >
        <span className="inline-flex w-fit items-center rounded-full bg-[var(--aqua)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--turquoise-dark)]">
          {blog.category}
        </span>
        <h3 className="mt-5 font-heading text-xl lg:text-2xl text-[var(--ink)]">{blog.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">{blog.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-[var(--ink-muted)]">{blog.readingTime}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--turquoise-dark)]">
            Read More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
