"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOKING_URL, serviceLinks } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/" onClick={() => setOpen(false)} aria-label="Digital Saugat home">
          <Image src="/logo.png" alt="Digital Saugat" width={1138} height={219} priority />
        </Link>
        <nav className={styles.desktop} aria-label="Primary navigation">
          <Link href="/">Home</Link><Link href="/about">About</Link>
          <div className={styles.drop}><Link href="/services">Services <ChevronDown size={14} /></Link><div className={styles.menu}>{serviceLinks.map(s => <Link href={s.href} key={s.href}>{s.label}</Link>)}</div></div>
          <Link href="/blog">Blog</Link><Link href="/contact">Contact</Link>
        </nav>
        <Link className={`btn btn-primary ${styles.cta}`} href={BOOKING_URL}>Book Free Consultation</Link>
        <button className={styles.toggle} onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-menu" className={styles.mobile} aria-label="Mobile navigation">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/about" onClick={() => setOpen(false)}>About</Link><Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        {serviceLinks.map(s => <Link className={styles.sub} href={s.href} key={s.href} onClick={() => setOpen(false)}>{s.label}</Link>)}
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><Link className="btn btn-primary" href={BOOKING_URL} onClick={() => setOpen(false)}>Get My Free Marketing Plan</Link>
      </nav>}
    </header>
  );
}
