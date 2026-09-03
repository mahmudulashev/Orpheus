"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { SectionTitle } from "@/components/ui/section-title";
import { WorkCard } from "@/components/ui/work-card";
import { works } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Figma: "Works" — right-aligned section title over a carousel that bleeds
 * past the right edge of the page.
 */
export function Works() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync).on("settle", sync);
  }, [embla, sync]);

  return (
    <section id="works" className="pt-[80px]">
      <div className="container-page flex flex-wrap items-center justify-between gap-6">
        <div className="order-2 flex items-center gap-[12px] md:order-1">
          <CarouselButton
            direction="prev"
            disabled={!canPrev}
            onClick={() => embla?.scrollPrev()}
          />
          <CarouselButton
            direction="next"
            disabled={!canNext}
            onClick={() => embla?.scrollNext()}
          />
        </div>
        <SectionTitle
          title="Recent NFT"
          href="#works"
          className="order-1 ml-auto md:order-2"
        />
      </div>

      {/* Full-bleed viewport, padded to the page gutter on the left only. */}
      <div className="mt-[13px] overflow-hidden pl-[var(--gutter)]" ref={emblaRef}>
        <div className="flex gap-[84px] py-[23px]">
          {works.map((work, i) => (
            <div
              key={work.id}
              className="min-w-0 shrink-0 basis-[min(450px,80vw)]"
            >
              <WorkCard work={work} priority={i < 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous works" : "Next works"}
      className={cn(
        "grid size-[44px] place-items-center rounded-full border transition-all duration-300",
        "border-[color-mix(in_srgb,var(--gold-300)_35%,transparent)] text-[var(--gold-300)]",
        "hover:border-[var(--gold-300)] hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)]",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </button>
  );
}
