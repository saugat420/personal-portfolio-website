import { BOOKING_URL } from "@/lib/constants";
import { Button } from "./Button";
import styles from "./CTASection.module.css";

export function CTASection({ compact = false }: { compact?: boolean }) {
  return <section className={compact ? "section-sm" : "section"}><div className={`container ${styles.wrap} pattern`}>
    <div><span className="eyebrow">Your next step</span><h2 className="h2">Not Sure What Your Business Should Do Next?</h2><p className="lead">Stop guessing which marketing strategy, AI tool or advertising channel you should use. Let&apos;s look at your business and identify what actually makes sense.</p></div>
    <div className={styles.action}><Button href={BOOKING_URL}>Book a Free Consultation</Button><span>Get a customized Digital Marketing Plan built around your business, customers and growth goals.</span></div>
  </div></section>;
}
