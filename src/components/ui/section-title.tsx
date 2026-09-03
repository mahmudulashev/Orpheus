import Link from "next/link";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  href?: string;
  actionLabel?: string;
  className?: string;
};

/** Figma: "Section Title" — gold heading, hairline rule, quiet action link. */
export function SectionTitle({
  title,
  href = "#",
  actionLabel = "View more",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("group flex h-[50px] items-center gap-[22px]", className)}>
      <h2 className="text-[25px] leading-none font-bold tracking-[0.19em] text-[var(--gold-300)] uppercase">
        {title}
      </h2>
      <span
        aria-hidden
        className="h-[28px] w-px bg-[color-mix(in_srgb,var(--gold-300)_55%,transparent)]"
      />
      <Link
        href={href}
        className="relative text-[20px] leading-none tracking-[0.135em] text-fg-muted uppercase transition-colors duration-300 hover:text-[var(--gold-300)]"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
