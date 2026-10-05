import { Breadcrumbs } from "./Breadcrumbs";
import styles from "./PageHero.module.css";

export function PageHero({ eyebrow, title, copy, children, breadcrumbs }: { eyebrow: string; title: string; copy: string; children?: React.ReactNode; breadcrumbs?: {label:string;href?:string}[] }) {
  return <section className={styles.hero}><div className="container">{breadcrumbs && <Breadcrumbs items={breadcrumbs} />}<span className="eyebrow">{eyebrow}</span><h1 className="display">{title}</h1><p className="lead">{copy}</p>{children}</div></section>;
}
