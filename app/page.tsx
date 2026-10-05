import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, Check, CircleCheck, MousePointerClick, Search, Sparkles, Target, Workflow } from "lucide-react";
import { Button } from "@/components/Button";
import { ConsultationOffer } from "@/components/ConsultationOffer";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { FunMarquee } from "@/components/FunMarquee";
import { services } from "@/data/services";
import { BOOKING_URL, SITE_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata("AI-Powered Digital Marketing for Business Growth", "Generate more leads, attract more customers and grow sales with an AI-powered digital marketing system built around your business.");

const problems = ["Not getting enough quality leads", "Ads that spend money but don't generate enough sales", "Social media content that gets views but not customers", "A website that looks good but doesn't convert", "No proper follow-up with potential customers", "Too many marketing tools that don't work together", "Not knowing what to focus on next"];
const process = [
  ["01", "Understand", "We start with your business. Who are your customers? What do you sell? What is currently working? Where are you losing opportunities?"],
  ["02", "Plan", "We identify the marketing channels and strategies that make the most sense for your business."],
  ["03", "Build", "We create the campaigns, content, pages, funnels and automation your strategy requires."],
  ["04", "Improve", "We look at what is working, what isn't and continuously improve your marketing."],
];
const principles = [
  [Target, "Strategy Before Tools", "We first understand the problem before choosing the solution."],
  [Sparkles, "AI-Powered Execution", "Use AI where it can save time, improve research or make your marketing more efficient."],
  [MousePointerClick, "Conversion Focused", "Views and clicks are useful only when they help move customers closer to buying."],
  [Workflow, "Connected Marketing", "Ads, content, websites and automation shouldn't work separately. They should support each other."],
  [Search, "Continuous Improvement", "Marketing is never one-and-done. We learn from the data and keep improving."],
];

export default function Home() {
  return <>
    <JsonLd data={{ "@context":"https://schema.org", "@graph":[{"@type":"Person",name:"Saugat Basnet",jobTitle:"AI Marketing Expert",url:SITE_URL},{"@type":"ProfessionalService",name:"Digital Saugat",url:SITE_URL,founder:{"@type":"Person",name:"Saugat Basnet"}},{"@type":"WebSite",name:"Digital Saugat",url:SITE_URL}] }} />
    <section className={styles.hero}><div className={`container ${styles.heroGrid}`}>
      <div><span className="eyebrow">AI-Powered Digital Marketing</span><h1 className="display">Grow Your Business With <span className="accent">Smarter Marketing</span></h1><p className="lead">I help small and medium businesses generate more leads, attract more customers and grow sales using AI-powered digital marketing.</p><p className="lead">From ads and content to websites and automation, I help you build a marketing system that works together.</p><div className={`button-row ${styles.heroButtons}`}><Button href={BOOKING_URL}>Book a Free Consultation</Button><Button href="/services" variant="secondary">Explore My Services</Button></div><p className={styles.support}>Get a customized Digital Marketing Plan for your business.</p><div className={styles.trust}>{["Clear Strategy", "Connected Marketing", "Smarter Systems"].map(x=><span key={x}><CircleCheck size={15}/>{x}</span>)}</div></div>
      <div className={styles.portrait}><Image src="/talking-head-hero.png" alt="Saugat Basnet, AI Marketing Expert" width={941} height={1672} priority sizes="(max-width: 560px) 320px, (max-width: 900px) 360px, 430px" /></div>
    </div><a className={styles.scroll} href="#problem" aria-label="Scroll to next section"><ArrowDown/></a></section>
    <FunMarquee />

    <section className="section rule" id="problem"><div className="container"><SectionHeading eyebrow="The problem" title="Is Your Marketing Actually Growing Your Business?" copy="You may already be posting content, running ads or spending money on marketing. But you are still struggling with:"/><div className={styles.problemGrid}><div className={styles.problemList}>{problems.map(p=><span key={p}><Check size={16}/>{p}</span>)}</div><div className={styles.valueBox}><span>THE REAL ISSUE</span><h3>You need a clearer marketing system.</h3><p>The problem usually isn&apos;t that you need more marketing. You need a clearer marketing system built around your business.</p></div></div></div></section>

    <section className={`section ${styles.ai}`}><div className="container"><SectionHeading eyebrow="The solution" title="Turn Your Marketing Into a System That Helps You Grow" copy="AI-powered digital marketing combines proven marketing strategies with AI, automation and technology to make your marketing smarter, faster and more effective."/><p className="lead">Instead of doing random marketing activities, we connect everything together:</p><div className={styles.flow}>{["Attract","Convert","Follow Up","Sell","Grow"].map((x,i)=><div key={x}><strong>{x}</strong>{i<4&&<ArrowRight/>}</div>)}</div><p className="lead">I help you identify what your business actually needs and build the right system around it.</p><div className={styles.bridgeCta}><Button href={BOOKING_URL}>Get My Free Digital Marketing Plan</Button><span>Book a free consultation and get a customized plan for your business.</span></div></div></section>

    <section className="section rule"><div className="container"><SectionHeading eyebrow="Services" title="Everything You Need to Build a Better Marketing System" copy="You don't need every marketing service. You need the right combination of services based on your business, customers and goals."/><div className={styles.serviceFeatures}>{services.map(s=>{const Icon=s.icon;return <article className="card" key={s.slug}><div className="icon-box"><Icon size={23}/></div><span className={styles.serviceName}>{s.title}</span><h3>{s.homeTitle}</h3><p>{s.homeCopy}</p><strong>What I can help with:</strong><ul>{s.homeItems.map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul><Link href={`/services/${s.slug}`}>Explore {s.title === "Website & Landing Pages" ? "Website Design" : s.title} <ArrowRight size={15}/></Link></article>})}</div></div></section>

    <section className="section rule"><div className="container"><SectionHeading eyebrow="How it works" title="A Simple Approach to Growing Your Business"/><div className={styles.process}>{process.map(([n,t,c])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}</div></div></section>

    <section className={`section ${styles.ai}`}><div className={`container ${styles.aiGrid}`}><div><SectionHeading eyebrow="AI + strategy" title="AI Makes Marketing Faster. Strategy Makes It Work."/><p className="lead">AI can help businesses research customers, create content, automate tasks, analyze information and improve marketing execution.</p><p className="lead">But AI alone won&apos;t grow a business.</p></div><div className={styles.aiDiagram}><div className={styles.aiCenter}>YOU STILL NEED</div><div className={styles.fundamentals}>{["The right customer","The right offer","The right message","The right strategy"].map(x=><b key={x}>{x}</b>)}</div><p>That&apos;s where AI-powered digital marketing comes in. We combine good marketing principles with modern AI tools to create a smarter way to grow.</p></div></div></section>

    <section className="section rule"><div className="container"><SectionHeading eyebrow="Why work with me" title="Marketing Focused on Business Growth" copy="I don't believe in using marketing tools just because they are popular. Every strategy should answer one question: How does this help your business grow?"/><div className={styles.principles}>{principles.map(([Icon,title,copy])=><div className="card" key={title as string}><Icon size={23}/><h3>{title as string}</h3><p>{copy as string}</p></div>)}</div></div></section>

    <ConsultationOffer/>

    <section className="section rule"><div className={`container ${styles.about}`}><div className={styles.miniPortrait}><Image src="/saugat-about.png" alt="Portrait of Saugat Basnet" width={1122} height={1402} sizes="(max-width: 900px) 360px, 420px" /></div><div><SectionHeading eyebrow="About" title="Hi, I'm Saugat."/><p className="lead">I&apos;m Saugat Basnet, an AI Marketing Expert. I help small and medium business owners use AI and digital marketing to attract customers, generate leads and grow sales.</p><p className="muted">I believe businesses don&apos;t need more complicated marketing. They need a clear strategy, the right tools and consistent execution.</p><p className="muted">That&apos;s why I combine marketing strategy, advertising, content, websites and AI automation to solve real business problems.</p><Button href="/about" variant="secondary">More About Saugat</Button></div></div></section>
    <CTASection/>
  </>;
}
