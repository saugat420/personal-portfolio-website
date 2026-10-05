import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BOOKING_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata=pageMetadata("Get Your Free Customized Digital Marketing Plan","Tell Saugat about your business and get clear recommendations for your marketing, lead generation, follow-up and automation.","/contact");
const discussion=["Your business and offer","Your ideal customers","Your current marketing","How you're generating leads today","Where potential customers are dropping off","Opportunities to improve your marketing","Where AI and automation could help","Your next practical steps"];
const plan=["Meta Ads","Content","Website","Lead generation","Follow-up","Automation","Customer journey"];
export default function Contact(){return <>
  <PageHero eyebrow="Free strategy consultation" title="Get Your Free Customized Digital Marketing Plan" copy="Not sure what you should do next with your marketing? Let's figure it out together. Tell me about your business, what you're currently doing and where you're struggling. I'll help you identify the marketing opportunities you should focus on."><div className="button-row"><Button href="#book">Book My Free Consultation</Button></div></PageHero>
  <section className="section"><div className="container grid-2" style={{gap:"clamp(40px,8vw,100px)"}}><div><SectionHeading eyebrow="What we'll look at" title="During the Consultation, We'll Discuss:"/><ul className="check-list">{discussion.map(x=><li key={x}><Check size={18}/>{x}</li>)}</ul></div><div><SectionHeading eyebrow="What you'll walk away with" title="A Clearer Digital Marketing Direction" copy="You'll get recommendations based on your business, rather than a generic marketing checklist. Your plan may include recommendations around:"/><ul className="check-list">{plan.map(x=><li key={x}><Check size={18}/>{x}</li>)}</ul></div></div></section>
  <section className="section rule" id="book"><div className="container grid-2" style={{gap:"clamp(40px,7vw,90px)",alignItems:"start"}}><div><SectionHeading eyebrow="Get started" title="Tell Me About Your Business" copy="Share some context before the consultation so we can make the conversation more useful."/><div style={{marginTop:32,borderLeft:"2px solid #ffd400",paddingLeft:18}}><p className="lead">You don&apos;t need more random marketing. You need a clear marketing system built around your business.</p><Button href={BOOKING_URL}>Book My Free Consultation</Button></div></div><ContactForm/></div></section>
  </>}
