import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/shared/blog-card";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { blogs, getBlogBySlug } from "@/lib/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-40 sm:pt-48">
        <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />
        <div className="container-narrow relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[var(--turquoise)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--turquoise)]">
            {blog.category}
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-medium text-white sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-5 text-sm text-white/60">{blog.readingTime}</p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-narrow space-y-6">
          {blog.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--ink-muted)]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-3xl text-[var(--ink)]">More from the Blog</h2>
            <Link href="/blog" className="hidden items-center gap-1.5 text-sm font-semibold text-[var(--turquoise-dark)] sm:flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b, i) => (
              <BlogCard key={b.slug} blog={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
