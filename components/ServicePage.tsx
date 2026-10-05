import { Check, CircleAlert } from "lucide-react";
import type { Service } from "@/data/services";
import { BOOKING_URL, SITE_URL } from "@/lib/constants";
import { Button } from "./Button";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import styles from "./ServicePage.module.css";

export function ServicePage({ service }: { service: Service }) {
  return <>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"Service", name:service.title, description:service.short, provider:{"@type":"ProfessionalService",name:"Digital Saugat"}, url:`${SITE_URL}/services/${service.slug}` }} />
    <PageHero eyebrow={service.title} title={service.hero} copy={service.intro} breadcrumbs={[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:service.title}]}>
      {service.heroHighlight && <p className={styles.highlight}>{service.heroHighlight}</p>}
      <p className={styles.heroClose}>{service.heroClose}</p>
      <div className="button-row"><Button href={BOOKING_URL}>{service.heroCta}</Button></div>
    </PageHero>
    {service.problems.length > 0 && <section className="section"><div className={`container ${styles.two}`}><SectionHeading eyebrow="The bigger picture" title={service.problemsTitle} copy={service.problemsCopy || undefined} /><div className={styles.problemList}>{service.problems.map(x => <div key={x}><CircleAlert size={18}/><span>{x}</span></div>)}</div></div></section>}
    <section className="section rule"><div className="container"><SectionHeading eyebrow="The service" title={service.includesTitle} /><div className={styles.includes}>{service.includes.map(x => <div className="card" key={x}><Check size={20}/><span>{x}</span></div>)}</div>{service.note && <p className={styles.note}>{service.note}</p>}</div></section>
    <section className="section rule"><div className={`container ${styles.closing}`}><div><span className="eyebrow">A clearer next step</span><h2 className="h2">{service.closingTitle}</h2><p className="lead">{service.closingCopy}</p></div><div><Button href={BOOKING_URL}>Book My Free Consultation</Button><p>Get your customized Digital Marketing Plan.</p></div></div></section>
  </>;
}
