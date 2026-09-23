export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  /** CSS object-position for `image`, e.g. "center 45%" — tune per-photo when the default crop cuts off a face. */
  imagePosition?: string;
  highlights: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  /** Paragraphs of body copy, rendered in order. */
  content: string[];
  category: string;
  readingTime: string;
  publishedAt: string;
}

export interface Doctor {
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  about: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  image?: string;
  /** CSS object-position for the avatar crop; defaults to "center 25%" if omitted. */
  imageFocus?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: "Interior" | "Reception" | "Kids Area" | "Treatment Room" | "Equipment" | "Doctors" | "Happy Faces";
  /** Intrinsic pixel dimensions — used to lay out the masonry grid without cropping. */
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** A single photograph shown in the Events gallery. */
export interface EventItem {
  src: string;
  /** Human-readable event title, e.g. "School Dental Screening Camp". */
  title: string;
  /** Category label, matching one of the EventCategory titles. */
  category: string;
  /** Optional short caption describing the activity. */
  description: string;
  /** Intrinsic pixel dimensions — used to lay out the masonry grid without cropping. */
  width: number;
  height: number;
}

/** A card describing one class of community initiative on the Events page. */
export interface EventCategory {
  id: string;
  title: string;
  description: string;
  /** Icon name resolved through components/shared/icon-map.ts. */
  icon: string;
  /** Sample activity tags/highlights shown on the card. */
  tags: string[];
}
