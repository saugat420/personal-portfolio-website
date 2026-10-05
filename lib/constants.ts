export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalsaugat.com";
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact#book";

export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  youtube: "#",
  whatsapp: "#",
} as const;

export const serviceLinks = [
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Website & Landing Pages", href: "/services/website-landing-page-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];
