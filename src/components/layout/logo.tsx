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
        className="relative block h-[44px] w-[41px] shrink-0 transition-transform duration-500 ease-out group-hover:rotate-6"
        aria-hidden
      >
        <Image
          src="/images/logo-mark-light.png"
          alt=""
          width={41}
          height={44}
          priority
          className="size-full object-contain dark:hidden"
        />
        <Image
          src="/images/logo-mark-dark.png"
          alt=""
          width={41}
          height={44}
          priority
          className="hidden size-full object-contain dark:block"
        />
      </span>
      <span className="font-serif text-[29px] leading-none font-bold tracking-[0.052em] text-fg [font-variant:small-caps]">
        {site.name}
      </span>
    </Link>
  );
}
