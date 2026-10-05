import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BOOKING_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata=pageMetadata("About Saugat Basnet—AI Marketing Expert","Saugat helps small and medium businesses build better marketing systems using digital marketing, AI and automation.","/about");
const capabilities=[
  ["Traffic","Bring the right people to your business."],["Content","Build awareness and trust."],["Conversion","Turn visitors into leads."],
  ["Follow-Up","Stay connected with potential customers."],["Automation","Remove repetitive work."],["Optimization","Understand what is working and improve it."],
];
export default function About(){return <>
  <PageHero eyebrow="About Saugat" title="Helping Businesses Grow With Marketing + AI" copy="I'm Saugat Basnet. I help small and medium businesses build better marketing systems using digital marketing, AI and automation."><div className="button-row"><Button href={BOOKING_URL}>Book a Free Consultation</Button></div></PageHero>
  <section className="section"><div className="container grid-2" style={{alignItems:"center",gap:"clamp(40px,8vw,100px)"}}><Image src="/saugat-about.png" alt="Portrait of Saugat Basnet" width={1122} height={1402} sizes="(max-width: 860px) 100vw, 50vw" style={{display:"block",width:"100%",height:"auto",borderRadius:24}} priority/><div><SectionHeading eyebrow="My approach" title="Technology Changes. Good Marketing Doesn't."/><p className="lead">There will always be new AI tools, advertising platforms and marketing trends.</p><p className="muted">But customers still buy because they have a problem, they find a solution, they trust the business offering that solution, and they believe the value is worth the price.</p><p className="muted">That&apos;s why I start with your customer, offer and business goals before thinking about tools. Then we use AI and digital marketing to reach more people, communicate better and make the process more efficient.</p></div></div></section>
  <section className="section rule"><div className="container"><SectionHeading eyebrow="What I do" title="What I Help Businesses With" copy="I work across the major parts of your digital marketing system:"/><div className="grid-3" style={{marginTop:42}}>{capabilities.map(([title,copy])=><div className="card" key={title}><Check size={21} color="#ffd400"/><h3 style={{margin:"24px 0 8px"}}>{title}</h3><p>{copy}</p></div>)}</div></div></section>
  <section className="section rule"><div className="container" style={{maxWidth:900,textAlign:"center"}}><SectionHeading eyebrow="Let's find the opportunities" title="Let's Find the Marketing Opportunities Inside Your Business" copy="Book a free consultation and I'll help you build a customized Digital Marketing Plan based on your business and goals."/><div style={{marginTop:28}}><Button href={BOOKING_URL}>Book My Free Consultation</Button></div></div></section>
  </>}
