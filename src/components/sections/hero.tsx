"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { GoldButton, GoldOutlineButton } from "@/components/ui/button";
import { hero } from "@/lib/content";

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

/** Figma: "Header" — 872px tall, copy on the left, keyed artwork on the right. */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative">
      <div className="container-page relative min-h-[560px] md:h-[872px]">
        {/* Artwork — Figma places it at x 761→1617, y 118→872 on a 1728 canvas. */}
        <HeroArt />

        <motion.div
          variants={group}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative z-10 flex max-w-[552px] flex-col pt-[190px] md:absolute md:top-[328px] md:pt-0"
        >
          <motion.h1
            variants={rise}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-semibold text-gold-gradient"
          >
            <span className="block text-[clamp(38px,4.17vw,72px)] leading-[1.167] [font-variant:small-caps]">
              {hero.eyebrow}
            </span>
            <span className="block text-[clamp(42px,4.86vw,84px)] leading-[1] tracking-[0.19em] uppercase">
              {hero.title}
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[37px] max-w-[552px] text-[clamp(16px,1.16vw,20px)] leading-[2.5] tracking-[0.055em] text-fg-muted"
          >
            {hero.body}
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[37px] flex flex-wrap items-center gap-[56px]"
          >
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
          </motion.div>
        </motion.div>
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
