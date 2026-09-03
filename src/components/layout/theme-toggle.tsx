"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { useHydrated } from "@/lib/use-hydrated";

/** Figma: "Sun" / "moon" — 29px icon toggle at the end of the nav. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();

  const isDark = hydrated && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        hydrated
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      className="relative grid size-[29px] place-items-center text-fg transition-colors duration-300 hover:text-[var(--gold-300)]"
    >
      <AnimatePresence initial={false} mode="wait">
        {hydrated ? (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            {isDark ? (
              <Sun className="size-[24px]" strokeWidth={1.6} />
            ) : (
              <Moon className="size-[22px] -rotate-25" strokeWidth={1.6} />
            )}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  );
}
