import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/content";

/** Figma: "Logo" — 44px medallion + serif small-caps wordmark. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className="group flex items-center gap-[14px]"
    >
      <span
        className="relative size-[44px] shrink-0 rounded-full ring-1 ring-[color-mix(in_srgb,var(--gold-300)_70%,transparent)] transition-transform duration-500 ease-out group-hover:rotate-6"
        aria-hidden
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={44}
          height={44}
          priority
          className="size-full rounded-full object-cover"
        />
      </span>
      <span className="font-serif text-[29px] leading-none font-bold tracking-[0.052em] text-fg [font-variant:small-caps]">
        {site.name}
      </span>
    </Link>
  );
}
