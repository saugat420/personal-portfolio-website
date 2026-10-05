import Link from "next/link";
import Image from "next/image";
import { serviceLinks, SOCIAL_LINKS } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return <footer className={styles.footer}><div className={`container ${styles.grid}`}>
    <div><Link href="/" className={styles.brand} aria-label="Digital Saugat home"><Image src="/logo.png" alt="Digital Saugat" width={1138} height={219} /></Link><p>You don&apos;t need more random marketing. You need a clear marketing system built around your business.</p></div>
    <div><h2>Navigate</h2><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
    <div><h2>Services</h2>{serviceLinks.map(s => <Link key={s.href} href={s.href}>{s.label}</Link>)}</div>
    <div><h2>Follow</h2>{Object.entries(SOCIAL_LINKS).map(([label, href]) => <a key={label} href={href}>{label[0].toUpperCase()+label.slice(1)}</a>)}</div>
  </div><div className={`container ${styles.bottom}`}><span>© {new Date().getFullYear()} Digital Saugat. All rights reserved.</span><span><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></span></div></footer>;
}
