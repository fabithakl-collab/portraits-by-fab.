/**
 * EDIT THIS FILE to update photos, contact details and text.
 * Put image files in /public/images and reference them like "/images/couple-01.jpg".
 * Leave a field as "" to hide it (photos with src "" show an elegant placeholder).
 */

export const categories = ["Couples", "Pre-wedding", "Romantic Portraits", "Individual Portraits", "Moments"] as const;
export type Category = (typeof categories)[number];

export type Photo = { src: string; alt: string; category: Category };

export const site = {
  brand: "PORTRAITS BY FAB",
  photographer: "FABITH SEBASTIAN",
  photographerName: "Fabith Sebastian",
  tagline: "Capturing connections. Creating timeless memories.",
  description:
    "Luxury couples photography: engagements, pre-wedding shoots, romantic and individual portraits by Fabith Sebastian.",
  url: "https://www.yourdomain.com", // <- your real domain (used for SEO metadata)

  contact: {
    instagramHandle: "@portraitsbyfab",
    instagramUrl: "https://instagram.com/portraitsbyfab",
    whatsapp: "", // digits only with country code, e.g. "447XXXXXXXXX"
    email: "",
    phone: "",
    location: "", // e.g. "Based in ..., available to travel"
  },

  heroImage: "/images/hero.jpg", // landscape, at least 2000px wide
  aboutImage: "/images/fab.jpg", // portrait 4:5

  // Optional: a few images for the Instagram strip (leave [] to hide the strip)
  instagramImages: [] as string[],

  photos: [
    { src: "", alt: "Couple embracing at golden hour", category: "Couples" },
    { src: "", alt: "Couple laughing together", category: "Couples" },
    { src: "", alt: "Pre-wedding portrait", category: "Pre-wedding" },
    { src: "", alt: "Romantic portrait", category: "Romantic Portraits" },
    { src: "", alt: "Individual portrait", category: "Individual Portraits" },
    { src: "", alt: "A quiet moment between two people", category: "Moments" },
    { src: "", alt: "Couple walking", category: "Couples" },
    { src: "", alt: "Pre-wedding session", category: "Pre-wedding" },
    { src: "", alt: "Romantic detail", category: "Romantic Portraits" },
    { src: "", alt: "Candid moment", category: "Moments" },
    { src: "", alt: "Editorial portrait", category: "Individual Portraits" },
    { src: "", alt: "Couple at sunset", category: "Couples" },
  ] as Photo[],

  services: [
    { title: "Couples Experience", text: "Romantic and intimate couple sessions.", type: "Couples" },
    { title: "Engagement Stories", text: "Beautifully documented engagement memories.", type: "Engagement" },
    { title: "Pre-wedding Stories", text: "Cinematic storytelling before the wedding day.", type: "Pre-wedding" },
    { title: "Portrait Experience", text: "Personal and editorial portrait sessions.", type: "Individual portrait" },
  ],

  // Add REAL testimonials only. The section stays hidden while this is empty.
  testimonials: [] as { quote: string; name: string }[],
};

export const shootTypes = ["Couples", "Engagement", "Pre-wedding", "Romantic portraits", "Individual portrait"];
