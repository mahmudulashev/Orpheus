"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to hold before the element starts moving. */
  delay?: number;
  /** Play on mount instead of waiting for the element to scroll into view. */
  immediate?: boolean;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade-and-rise used for every entrance on the page. */
export function Reveal({
  children,
  delay = 0,
  immediate = false,
  className,
}: RevealProps) {
  const shared = {
    initial: { opacity: 0, y: 26 },
    transition: { duration: 0.7, ease: EASE, delay },
    className,
  };

  return immediate ? (
    <motion.div {...shared} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  ) : (
    <motion.div
      {...shared}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  );
}
