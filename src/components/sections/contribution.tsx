import { Banner } from "@/components/ui/banner";
import { SectionTitle } from "@/components/ui/section-title";
import { banners } from "@/lib/content";

/** Figma: "Contribution" — section title above two stacked banners. */
export function Contribution() {
  return (
    <section id="contribution" className="container-page pt-[81px]">
      <SectionTitle title="Contribution" href="#contribution" />

      <div className="mt-[34px] flex flex-col gap-[56px]">
        {banners.map((banner) => (
          <div key={banner.id} id={banner.align === "media-right" ? "community" : undefined}>
            <Banner banner={banner} />
          </div>
        ))}
      </div>
    </section>
  );
}
