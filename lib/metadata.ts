import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Digital Saugat", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
