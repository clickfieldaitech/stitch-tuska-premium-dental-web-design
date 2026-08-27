import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { EventsGallery } from "@/components/shared/events-gallery";
import { EventsHero } from "@/components/sections/events-hero";
import { EventsCta } from "@/components/sections/events-cta";
import { EventCategories } from "@/components/sections/event-categories";
import { eventCategories, eventItems } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Smiles in action, care in community — exploring Tuskaè's dental screening camps, oral health awareness programs, and community outreach initiatives for children.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />

      {/* Event Gallery */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Event Gallery"
            title="Moments from our community programs"
            description="Pediatric screenings, infant examinations, screening camps, and awareness activities — a look at Tuskaè in action around the community."
          />
          <div className="mt-16">
            <EventsGallery items={eventItems} />
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <EventCategories categories={eventCategories} />

      {/* CTA */}
      <EventsCta />
    </>
  );
}