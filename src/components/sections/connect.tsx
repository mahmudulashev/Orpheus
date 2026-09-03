import type { ComponentType } from "react";
import { FaGithub, FaGlobe, FaTelegram } from "react-icons/fa6";

import { author, connect, socials, type Social } from "@/lib/content";

const icons: Record<Social["id"], ComponentType<{ className?: string }>> = {
  telegram: FaTelegram,
  github: FaGithub,
  portfolio: FaGlobe,
};

/** Figma: "Let's Connect" — centred sign-off with the social tiles. */
export function Connect() {
  return (
    <footer
      id="connect"
      className="container-page flex flex-col items-center pt-[88px] pb-[56px] text-center md:pt-[169px] md:pb-[72px]"
    >
      <h2 className="text-[25px] leading-[1.2] font-bold tracking-[0.166em] text-[var(--gold-300)] uppercase">
        {connect.title}
      </h2>

      <p className="mt-[30px] max-w-[600px] text-[16px] leading-[1.4] tracking-[0.15em] text-fg uppercase">
        {connect.body}
      </p>

      <ul className="mt-[30px] flex items-center justify-center gap-[14px] md:mt-[38px] md:gap-[30px]">
        {socials.map((social) => {
          const Icon = icons[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="grid size-[46px] place-items-center border border-[color-mix(in_srgb,var(--gold-300)_55%,transparent)] text-[var(--gold-300)] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-[3px] hover:border-[var(--gold-300)] hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)] md:size-[50px]"
              >
                <Icon className="size-[24px]" />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mt-[56px] text-[12px] tracking-[0.22em] text-fg-muted uppercase md:mt-[80px]">
        Designed &amp; built by{" "}
        <a
          href={author.url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-[var(--gold-300)] underline decoration-transparent underline-offset-[5px] transition-[text-decoration-color] duration-300 hover:decoration-[var(--gold-300)]"
        >
          {author.name}
        </a>
      </p>
    </footer>
  );
}
