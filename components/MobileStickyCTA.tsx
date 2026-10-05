import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./MobileStickyCTA.module.css";

export function MobileStickyCTA() {
  return <div className={styles.wrap}><Link href={BOOKING_URL}>Get My Free Marketing Plan</Link></div>;
}
