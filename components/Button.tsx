import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return <Link href={href} className={`btn btn-${variant} ${className}`}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
