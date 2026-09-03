import type { ComponentType } from "react";
import { FaDribbble, FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { connect, socials, type Social } from "@/lib/content";

const icons: Record<Social["id"], ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedinIn,
  dribbble: FaDribbble,
  instagram: FaInstagram,
  medium: MediumWordmark,
  mail: FaEnvelope,
};

function MediumWordmark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`font-serif text-[26px] leading-none font-semibold ${className ?? ""}`}
    >
      M
    </span>
  );
}

/** Figma: "Let's Connect" — centred sign-off with five 50px social tiles. */
export function Connect() {
  return (
    <footer
      id="connect"
      className="container-page flex flex-col items-center pt-[169px] pb-[120px] text-center"
    >
      <h2 className="text-[25px] leading-[1.2] font-bold tracking-[0.166em] text-[var(--gold-300)] uppercase">
        {connect.title}
      </h2>

      <p className="mt-[30px] max-w-[600px] text-[16px] leading-[1.4] tracking-[0.15em] text-fg uppercase">
        {connect.body}
      </p>

      <ul className="mt-[38px] flex flex-wrap items-center justify-center gap-[30px]">
        {socials.map((social) => {
          const Icon = icons[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="grid size-[50px] place-items-center border border-[color-mix(in_srgb,var(--gold-300)_55%,transparent)] text-[var(--gold-300)] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-[3px] hover:border-[var(--gold-300)] hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)]"
              >
                <Icon className="size-[22px]" />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
