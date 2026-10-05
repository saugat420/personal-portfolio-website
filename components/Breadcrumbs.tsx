import Link from "next/link";
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" style={{fontSize: ".82rem", color: "#888", marginBottom: 28}}>{items.map((x,i) => <span key={x.label}>{i > 0 && " / "}{x.href ? <Link href={x.href}>{x.label}</Link> : x.label}</span>)}</nav>;
}
