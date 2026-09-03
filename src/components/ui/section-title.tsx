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
    <div
      className={cn(
        "flex h-[50px] items-center gap-[10px] md:gap-[13px]",
        className,
      )}
    >
      <h2 className="text-[17px] leading-none font-bold tracking-[0.1em] whitespace-nowrap text-[var(--gold-300)] uppercase md:text-[25px] md:tracking-[0.19em]">
        {title}
      </h2>
      <span
        aria-hidden
        className="h-[28px] w-px bg-[color-mix(in_srgb,var(--gold-300)_55%,transparent)]"
      />
      <Link
        href={href}
        className="text-[13px] leading-none tracking-[0.08em] whitespace-nowrap text-fg-muted uppercase transition-colors duration-300 hover:text-[var(--gold-300)] md:text-[20px] md:tracking-[0.135em]"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
