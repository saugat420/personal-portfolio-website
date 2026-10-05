import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Digital Saugat | AI Marketing Expert", template: "%s | Digital Saugat" },
  description: "AI-powered digital marketing that helps small and medium businesses generate more leads, attract customers and grow sales.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollEffects /><Header /><main>{children}</main><Footer /><MobileStickyCTA /></body></html>;
}
