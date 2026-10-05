export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div><span className="eyebrow">{eyebrow}</span><h2 className="h2">{title}</h2>{copy && <p className="lead">{copy}</p>}</div>;
}
