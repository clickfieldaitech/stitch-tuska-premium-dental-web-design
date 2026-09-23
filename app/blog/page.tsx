import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { BlogCard } from "@/components/shared/blog-card";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { blogs } from "@/lib/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Tuskaè on pediatric airway health, dental myths, orthodontics, and making the right treatment decisions for your child's smile.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuskaè Blog"
        title="Dental insights, explained simply"
        description="Straight answers from our clinical team on the questions parents and patients ask us most often."
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.slug} blog={blog} index={i} />
          ))}
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
