import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target
}: ButtonLinkProps) {
  const styles = {
    primary: "bg-saffron-600 text-white shadow-glow hover:bg-saffron-700",
    secondary: "border border-river-700/20 bg-white text-river-900 hover:border-saffron-500",
    light: "bg-white text-river-900 hover:bg-cream"
  };

  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
