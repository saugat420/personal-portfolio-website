import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import styles from "./ConsultationOffer.module.css";

const topics = ["Current marketing", "Target customers", "Biggest challenges", "Business goals", "Lead generation process", "Sales process", "Opportunities for AI and automation"];
const recommendations = ["Where your biggest marketing opportunities are", "Which channels you should prioritize", "How you can generate more leads", "Where AI can save you time", "What your next marketing steps should be"];

export function ConsultationOffer() {
  return <section className="section rule" id="consultation"><div className="container"><SectionHeading eyebrow="Free marketing plan" title="Not Sure What Marketing Your Business Actually Needs?" copy="You don't need to guess." /><div className={styles.grid}>
    <div><h3 className="h2">Get a Customized Digital Marketing Plan for Your Business</h3><p className="lead">Book a free consultation and let&apos;s look at your business together. I&apos;ll help you identify what you should focus on and what you probably don&apos;t need to waste money on.</p><h4>We&apos;ll look at:</h4><ul className="check-list">{topics.map(item => <li key={item}><Check size={18} />{item}</li>)}</ul></div>
    <div className={`card ${styles.card}`}><h3>You&apos;ll Get Clear Recommendations for:</h3><ul className="check-list">{recommendations.map(item => <li key={item}><Check size={18} />{item}</li>)}</ul><div className={styles.action}><Button href={BOOKING_URL}>Book My Free Consultation</Button><p>Get your customized Digital Marketing Plan.</p></div></div>
  </div></div></section>;
}
