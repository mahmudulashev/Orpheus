import Image from "next/image";
import { Download } from "lucide-react";

import { GoldButton } from "@/components/ui/button";
import type { BannerContent } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Figma: "Banner" — 1496 × 434 panel, artwork on one side, copy on the other. */
export function Banner({ banner }: { banner: BannerContent }) {
  const mediaLeft = banner.align === "media-left";

  return (
    <article
      className={cn(
        "relative isolate flex w-full flex-col overflow-hidden md:h-[434px] md:flex-row",
        mediaLeft ? "bg-panel" : "bg-panel-alt",
      )}
    >
      <div
        className={cn(
          "relative h-[220px] w-full md:h-full md:w-[59%]",
          mediaLeft ? "md:order-1" : "md:order-2",
        )}
      >
        <BannerMedia banner={banner} mediaLeft={mediaLeft} />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-[26px] px-[24px] py-[40px] text-center md:py-0",
          mediaLeft ? "md:order-2" : "md:order-1",
        )}
      >
        <h3 className="text-[clamp(26px,2.55vw,44px)] leading-[1.14] font-bold tracking-[0.01em] text-[var(--gold-300)] uppercase">
          {banner.title}
        </h3>

        <p className="max-w-[706px] text-[clamp(18px,1.85vw,32px)] leading-[1.5] font-light tracking-[0.14em] text-fg uppercase">
          {banner.subtitle.map((token, i) =>
            token.strong ? (
              <strong key={i} className="font-semibold">
                {token.text}
              </strong>
            ) : (
              <span key={i}>{token.text}</span>
            ),
          )}
        </p>

        <GoldButton
          href={banner.cta.href}
          className="px-[20px]"
          iconLeft={<Download className="size-[15px]" strokeWidth={2.25} />}
        >
          {banner.cta.label}
        </GoldButton>
      </div>
    </article>
  );
}

function BannerMedia({
  banner,
  mediaLeft,
}: {
  banner: BannerContent;
  mediaLeft: boolean;
}) {
  const fade = mediaLeft
    ? "linear-gradient(to right, #000 55%, transparent 100%)"
    : "linear-gradient(to left, #000 55%, transparent 100%)";

  return (
    <>
      {(
        [
          [banner.imageLight, "dark:opacity-0"],
          [banner.imageDark, "opacity-0 dark:opacity-100"],
        ] as const
      ).map(([src, visibility]) => (
        <Image
          key={src}
          src={src}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 100vw, 59vw"
          style={{ maskImage: fade, WebkitMaskImage: fade }}
          className={cn(
            "object-cover transition-opacity duration-500",
            visibility,
          )}
        />
      ))}
    </>
  );
}
