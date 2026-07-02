import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "light" | "dark";
};

export function Card({ className = "", tone = "light", ...props }: CardProps) {
  const toneClass =
    tone === "dark"
      ? "border-white/14 bg-white/[0.07] text-white"
      : "border-vesp-navy/10 bg-white text-vesp-ink";

  return <div className={`rounded-lg border ${toneClass} ${className}`} {...props} />;
}
