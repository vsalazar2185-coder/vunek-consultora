import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const variants = {
  primary: "bg-vesp-copper text-white hover:bg-[#A9652D] focus-visible:ring-vesp-copper",
  secondary: "border border-white/32 bg-white/8 text-white hover:bg-white/14 focus-visible:ring-white",
  ghost: "border border-vesp-navy/14 bg-white text-vesp-navy hover:border-vesp-copper hover:text-vesp-copper",
  light: "bg-white text-vesp-navy hover:bg-vesp-mist/24 focus-visible:ring-white"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-vesp-navy disabled:cursor-not-allowed disabled:opacity-60";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
