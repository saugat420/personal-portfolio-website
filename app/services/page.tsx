import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { BOOKING_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata=pageMetadata("Digital Marketing Services Built Around Your Business","Find the right combination of Meta Ads, content, AI automation, websites and digital marketing strategy for your business.","/services");
export default function Services(){return <>
  <PageHero eyebrow="Services" title="Digital Marketing Services Built Around Your Business" copy="Your business may not need every marketing service. It needs the right strategy and the right combination of tools. I help businesses identify where their biggest opportunities are and build marketing systems around them."><div className="button-row"><Button href={BOOKING_URL}>Book a Free Consultation</Button></div><p style={{color:"#777",fontSize:13}}>Get a customized Digital Marketing Plan.</p></PageHero>
  <section className="section"><div className="container"><SectionHeading eyebrow="Choose your focus" title="Choose the Area Where You Need Help"/><div style={{display:"grid",gap:18,marginTop:46}}>{services.map((s,i)=>{const Icon=s.icon;return <Link href={`/services/${s.slug}`} className="card" key={s.slug} style={{display:"grid",gridTemplateColumns:"56px minmax(0,1fr) auto",gap:22,alignItems:"center"}}><div className="icon-box" style={{margin:0}}><Icon size={23}/></div><div><small style={{color:"#ffd400"}}>0{i+1}</small><h2 style={{margin:"6px 0 8px",fontSize:"1.35rem"}}>{s.title}</h2><p className="muted" style={{margin:0}}>{s.short}</p></div><ArrowRight color="#ffd400"/></Link>})}</div></div></section>
  <section className="section rule"><div className="container" style={{maxWidth:900,textAlign:"center"}}><SectionHeading eyebrow="That's completely fine" title="Don't Know Which Service You Need?" copy="Tell me about your business and I'll help you identify where your biggest marketing opportunities are."/><div style={{marginTop:28}}><Button href={BOOKING_URL}>Book a Free Consultation</Button><p style={{color:"#777",fontSize:13}}>Get a customized Digital Marketing Plan for your business.</p></div></div></section>
  </>}
