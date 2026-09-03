import Image from "next/image";
import { Download } from "lucide-react";
import type { CSSProperties } from "react";

import { GoldButton } from "@/components/ui/button";
import type { BannerContent } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Figma: "Banner" — a 1496 × 434 panel. The artwork mask is 881 wide and the
 * copy frame is 706 wide sitting at x 759, so both are placed as percentages
 * of the panel rather than split down the middle.
 */
const MEDIA_WIDTH = "58.89%";
const COPY_WIDTH = "47.19%";
const COPY_INSET = "50.74%";

export function Banner({ banner }: { banner: BannerContent }) {
  const mediaLeft = banner.align === "media-left";

  const mediaVars = { "--media-w": MEDIA_WIDTH } as CSSProperties;
  const copyVars = {
    "--copy-w": COPY_WIDTH,
    "--copy-x": mediaLeft ? COPY_INSET : "0.07%",
    "--title-tracking": banner.tracking.title,
    "--subtitle-tracking": banner.tracking.subtitle,
  } as CSSProperties;

  return (
    <article
      className={cn(
        "relative isolate w-full overflow-hidden md:h-[434px]",
        mediaLeft ? "bg-panel" : "bg-panel-alt",
      )}
    >
      <div
        style={mediaVars}
        className={cn(
          "relative h-[220px] w-full md:absolute md:inset-y-0 md:h-auto md:w-[var(--media-w)]",
          mediaLeft ? "md:left-0" : "md:right-0",
        )}
      >
        <BannerMedia banner={banner} mediaLeft={mediaLeft} />
      </div>

      <div
        style={copyVars}
        className="flex flex-col items-center gap-[26px] px-[24px] py-[40px] text-center md:absolute md:inset-y-0 md:start-[var(--copy-x)] md:w-[var(--copy-w)] md:justify-center md:px-0 md:py-0"
      >
        <h3 className="text-[clamp(24px,2.315vw,40px)] leading-[1.14] font-bold tracking-[0.06em] text-[var(--gold-300)] uppercase md:tracking-[var(--title-tracking)]">
          {banner.title}
        </h3>

        <p className="text-[clamp(17px,1.85vw,32px)] leading-[1.5625] font-light tracking-[0.14em] text-fg uppercase md:tracking-[var(--subtitle-tracking)]">
          {banner.subtitle.map((line, li) => (
            <span key={li} className="block">
              {line.map((token, i) =>
                token.strong ? (
                  <strong key={i} className="font-semibold">
                    {token.text}
                  </strong>
                ) : (
                  <span key={i}>{token.text}</span>
                ),
              )}
            </span>
          ))}
        </p>

        <GoldButton
          href={banner.cta.href}
          className="w-[165px]"
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
    ? "linear-gradient(to right, #000 58%, transparent 100%)"
    : "linear-gradient(to left, #000 58%, transparent 100%)";

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
          className={cn("object-cover transition-opacity duration-500", visibility)}
        />
      ))}
    </>
  );
}
