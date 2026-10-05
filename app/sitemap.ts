import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/constants";
export default function sitemap():MetadataRoute.Sitemap{const pages=["","/about","/services","/blog","/contact","/privacy-policy","/terms"];return [...pages.map(path=>({url:`${SITE_URL}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.7})),...services.map(s=>({url:`${SITE_URL}/services/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),...posts.map(p=>({url:`${SITE_URL}/blog/${p.slug}`,lastModified:new Date(p.date),changeFrequency:"monthly" as const,priority:.6}))]}
