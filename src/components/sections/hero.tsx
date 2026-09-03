"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { GoldButton, GoldOutlineButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/lib/content";

/** Figma: "Header" — 872px tall, copy on the left, keyed artwork on the right. */
export function Hero() {
  return (
    <section className="relative">
      <div className="container-page relative min-h-[560px] md:h-[872px]">
        {/* Artwork — Figma places it at x 760→1618, y 118→873 on a 1728 canvas. */}
        <HeroArt />

        <div className="relative z-10 flex max-w-[552px] flex-col pt-[190px] md:absolute md:top-[328px] md:pt-0">
          <Reveal immediate delay={0.1}>
            <h1 className="font-serif font-semibold text-gold-gradient">
              <span className="block text-[clamp(38px,4.34vw,75px)] leading-[1.12] tracking-[0.052em] [font-variant:small-caps]">
                {hero.eyebrow}
              </span>
              <span className="block text-[clamp(42px,4.86vw,84px)] leading-[1] tracking-[0.315em] uppercase">
                {hero.title}
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.22}>
            <p className="mt-[37px] max-w-[552px] text-[clamp(16px,1.16vw,20px)] leading-[2.5] tracking-[0.092em] text-fg-muted">
              {hero.body}
            </p>
          </Reveal>

          <Reveal immediate delay={0.34}>
            <div className="mt-[37px] flex flex-wrap items-center gap-[56px]">
              <GoldOutlineButton
                href={hero.secondary.href}
                className="w-[180px]"
                iconRight={
                  <ChevronDown
                    className="size-[16px] transition-transform duration-300 group-hover:translate-y-[2px]"
                    strokeWidth={2}
                  />
                }
              >
                {hero.secondary.label}
              </GoldOutlineButton>

              <GoldButton href={hero.primary.href} className="w-[170px]">
                {hero.primary.label}
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroArt() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
      className="pointer-events-none absolute top-[118px] left-[43.98%] w-[49.65%] max-md:hidden"
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full"
      >
        <Image
          src="/images/hero-art-light.png"
          alt=""
          width={1224}
          height={1077}
          priority
          sizes="50vw"
          className="art-keyed h-auto w-full dark:hidden"
        />
        <Image
          src="/images/hero-art-dark.png"
          alt=""
          width={1224}
          height={1077}
          priority
          sizes="50vw"
          className="art-keyed hidden h-auto w-full dark:block"
        />
      </motion.div>
    </motion.div>
  );
}
