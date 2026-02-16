import React from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-cyan text-brand-navy shadow-glow hover:brightness-110 active:brightness-95",
  secondary:
    "border border-white/10 bg-white/5 text-ui-fg hover:bg-white/10",
  ghost: "text-ui-fg hover:bg-white/5",
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
