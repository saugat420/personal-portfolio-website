import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { posts } from "@/data/posts";
import { BOOKING_URL, SITE_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import styles from "./article.module.css";

export function generateStaticParams(){return posts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=posts.find(x=>x.slug===slug);return p?pageMetadata(p.title,p.description,`/blog/${p.slug}`):{title:"Article Not Found"}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=posts.find(p=>p.slug===slug);if(!post)notFound();const related=posts.filter(p=>p.slug!==post.slug).slice(0,2);return <><JsonLd data={{"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.description,datePublished:post.date,author:{"@type":"Person",name:"Saugat Basnet"},mainEntityOfPage:`${SITE_URL}/blog/${post.slug}`}}/><article><header className={styles.header}><div className="container"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Blog",href:"/blog"},{label:post.title}]}/><span className="eyebrow">{post.category}</span><h1 className="display">{post.title}</h1><p className="lead">{post.description}</p><p className={styles.meta}>By Saugat Basnet · {new Date(post.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})} · {post.readingTime}</p></div></header><div className={`container ${styles.layout}`}><div>{post.sections.map(([h,c])=><section key={h} id={h.toLowerCase().replaceAll(" ","-")} className={styles.articleSection}><h2>{h}</h2><p>{c}</p></section>)}<div className={styles.articleCta}><h2>Want Help Applying This to Your Business?</h2><p className="muted">Reading about marketing is one thing. Knowing exactly what your business should do is another.</p><p className="muted">Book a free consultation and get a customized Digital Marketing Plan based on your business and goals.</p><Button href={BOOKING_URL}>Book My Free Consultation</Button></div></div><aside><div className={styles.toc}><b>In this article</b><ol>{post.sections.map(([h])=><li key={h}><a href={`#${h.toLowerCase().replaceAll(" ","-")}`}>{h}</a></li>)}</ol></div></aside></div></article><section className="section rule"><div className="container"><h2 className="h2">Related articles</h2><div className="grid-2">{related.map(p=><Link className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.description}</p><strong style={{color:"#ffd400",display:"flex",gap:7}}>Read article <ArrowRight size={16}/></strong></Link>)}</div></div></section></>}
