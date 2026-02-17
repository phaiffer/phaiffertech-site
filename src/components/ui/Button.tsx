import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type SharedProps = {
  variant?: Variant;
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

const base =
  "inline-flex items-center justify-center rounded-[var(--radius-xl)] px-5 py-3 text-sm font-semibold tracking-wide transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-navy)] " +
  "disabled:pointer-events-none disabled:opacity-60";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand-cyan)] text-[var(--color-brand-navy)] shadow-glow hover:bg-[var(--color-brand-cyan-2)] active:translate-y-px",
  secondary:
    "border border-white/10 bg-white/5 text-[var(--color-ui-fg)] shadow-soft hover:border-white/20 hover:bg-white/10 active:translate-y-px",
  ghost: "text-[var(--color-ui-fg)] hover:bg-white/10",
};

function composeClassNames(...parts: Array<string | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function Button(props: Props) {
  const { variant = "primary", className } = props;
  const classes = composeClassNames(base, styles[variant], className);

  if ("href" in props) {
    const anchorProps = { ...props } as AnchorProps;
    delete anchorProps.variant;
    delete anchorProps.className;
    return <a className={classes} {...anchorProps} />;
  }

  const buttonProps = { ...props } as ButtonProps;
  delete buttonProps.variant;
  delete buttonProps.className;
  const type = buttonProps.type ?? "button";
  return <button type={type} className={classes} {...buttonProps} />;
}
