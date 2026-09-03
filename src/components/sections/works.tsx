"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

import { SectionTitle } from "@/components/ui/section-title";
import { WorkCard } from "@/components/ui/work-card";
import { works } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Figma: "Works" — right-aligned section title over a carousel of 450 × 337.5
 * cards spaced 84px apart, bleeding past the right edge of the page.
 */
export function Works() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!embla) return () => {};
      embla.on("select", onChange).on("reInit", onChange).on("settle", onChange);
      return () => {
        embla
          .off("select", onChange)
          .off("reInit", onChange)
          .off("settle", onChange);
      };
    },
    [embla],
  );

  const canPrev = useSyncExternalStore(
    subscribe,
    () => embla?.canScrollPrev() ?? false,
    () => false,
  );
  const canNext = useSyncExternalStore(
    subscribe,
    () => embla?.canScrollNext() ?? false,
    () => false,
  );

  return (
    <section id="works" className="pt-[40px] md:pt-[80px]">
      <div className="container-page flex items-center justify-between gap-4">
        <div className="order-2 flex items-center gap-[8px] md:order-1 md:gap-[12px]">
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
          className="order-1 mr-auto md:order-2 md:mr-0 md:ml-auto"
        />
      </div>

      {/* Full-bleed viewport, padded to the page gutter on the left only. */}
      <div className="mt-[10px] overflow-hidden pl-[var(--gutter)] md:mt-[13px]" ref={emblaRef}>
        <div className="flex gap-[24px] py-[16px] md:gap-[84px] md:py-[23px]">
          {works.map((work, i) => (
            <div key={work.id} className="min-w-0 shrink-0 basis-[min(450px,80vw)]">
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
        "grid size-[38px] place-items-center rounded-full border transition-all duration-300 md:size-[44px]",
        "border-[color-mix(in_srgb,var(--gold-300)_35%,transparent)] text-[var(--gold-300)]",
        "hover:border-[var(--gold-300)] hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)]",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </button>
  );
}
