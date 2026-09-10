// Community events content for the /events page.
// Real photographs provided by the client in public/images/events2 — the
// intrinsic dimensions below keep the masonry gallery uncropped (natural
// aspect ratio), matching the GalleryGrid pattern used site-wide.
import type { EventCategory, EventItem } from "@/types/content";

export const eventCategories: EventCategory[] = [
  {
    id: "dental-screening-camps",
    title: "Dental Screening Camps",
    description:
      "Providing early dental assessment, preventive guidance, and oral health screening for children in the community.",
    icon: "Stethoscope",
    tags: ["Early Assessment", "Preventive Guidance", "Community Screenings"],
  },
  {
    id: "oral-health-awareness",
    title: "Oral Health Awareness Programs",
    description:
      "Creating awareness among children and families about prevention, hygiene, and healthy oral habits.",
    icon: "Megaphone",
    tags: ["Hygiene Habits", "Family Education", "Prevention First"],
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    description:
      "Extending compassionate pediatric dental care beyond the clinic through outreach initiatives.",
    icon: "HeartHandshake",
    tags: ["Beyond the Clinic", "Accessible Care", "Compassion"],
  },
  {
    id: "our-clinic",
    title: "Our Clinic",
    description:
      "A calm, modern space designed to put children and parents at ease, from reception to treatment room.",
    icon: "Building2",
    tags: ["Modern Facility", "Child-Friendly Design", "Advanced Equipment"],
  },
];

// Order mirrors public/images/events2 for a visually balanced masonry mix of
// portrait and landscape shots.
export const eventItems: EventItem[] = [
  {
    src: "/images/events2/file_000000004ef08211b24591513f27c258.png",
    title: "Pediatric Dental Screening Camp",
    category: "Dental Screening Camps",
    description: "Gentle screenings that make a child's first dental experience a positive one.",
    width: 1086,
    height: 1448,
  },
  {
    src: "/images/events2/IMG-20260822-WA0025.jpg.jpeg",
    title: "Oral Health Awareness Session",
    category: "Oral Health Awareness Programs",
    description: "Engaging children and families in fun, practical lessons on brushing and healthy habits.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/events2/file_0000000073a88211b997a4dad9634b35.png",
    title: "Infant Dental Examination",
    category: "Dental Screening Camps",
    description: "Early check-ups help set the foundation for a lifetime of healthy smiles.",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/events2/IMG-20260822-WA0013.jpg.jpeg",
    title: "School Screening Camp",
    category: "Dental Screening Camps",
    description: "Bringing oral health care directly to schools, right where children learn and play.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/events2/IMG-20260822-WA0028.jpg.jpeg",
    title: "Preventive Awareness Drive",
    category: "Oral Health Awareness Programs",
    description: "Simple preventive routines that keep young smiles strong and cavity-free.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/events2/IMG-20260730-WA0034.jpg.jpeg",
    title: "Community Outreach Visit",
    category: "Community Outreach",
    description: "Compassionate pediatric dental care reaching families beyond the clinic.",
    width: 2560,
    height: 1280,
  },
  {
    src: "/images/events2/clinic-reception-signage.jpg",
    title: "Reception & Welcome Area",
    category: "Our Clinic",
    description: "A warm, calming welcome area designed to ease the nerves of first-time visitors.",
    width: 2000,
    height: 1500,
  },
  {
    src: "/images/events2/clinic-treatment-room.jpg",
    title: "Modern Treatment Room",
    category: "Our Clinic",
    description: "Fully equipped treatment rooms built around comfort, precision, and safety.",
    width: 1500,
    height: 2000,
  },
  {
    src: "/images/events2/clinic-consed-sedation.jpg",
    title: "Conscious Sedation Setup",
    category: "Our Clinic",
    description: "Dedicated conscious sedation equipment for anxious or fearful young patients.",
    width: 1500,
    height: 2000,
  },
  {
    src: "/images/events2/clinic-office-nameplate.jpg",
    title: "Dr. Malavika's Office",
    category: "Our Clinic",
    description: "Dr. Malavika's office at Tuskaè, where every treatment plan begins.",
    width: 2000,
    height: 1500,
  },
];