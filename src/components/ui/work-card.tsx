import Image from "next/image";
import Link from "next/link";

import type { Work } from "@/lib/content";

/** Figma: "Frame 4" — 450 × 337.5 card, image with a caption scrim. */
export function WorkCard({ work, priority }: { work: Work; priority?: boolean }) {
  return (
    <Link
      href={work.href}
      className="group relative block aspect-[450/337.5] w-full overflow-hidden bg-panel outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 hover:outline-[color-mix(in_srgb,var(--gold-300)_70%,transparent)]"
    >
      <Image
        src={work.image}
        alt={`${work.title} — ${work.tag}`}
        fill
        sizes="(max-width: 640px) 88vw, (max-width: 1100px) 45vw, 450px"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      <div className="absolute inset-x-0 bottom-0 flex h-[58px] items-center bg-[var(--caption-scrim)] px-[20px] backdrop-blur-[2px]">
        <p className="truncate text-[16px] tracking-[0.107em] text-white/90">
          {work.title} -{" "}
          <span className="font-semibold text-white">{work.tag}</span>
        </p>
      </div>
    </Link>
  );
}
