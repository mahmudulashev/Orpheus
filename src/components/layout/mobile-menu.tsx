"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

import { Logo } from "@/components/layout/logo";
import { navItems } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Off-canvas navigation that slides in from the right edge, with a dimmed
 * backdrop, scroll lock and an Escape shortcut.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-[60] lg:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full cursor-default bg-black/55 backdrop-blur-[2px]"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            variants={{
              hidden: { x: "100%", opacity: 1 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.42, ease: EASE }}
            className="absolute inset-y-0 right-0 flex w-[min(360px,86vw)] flex-col border-l border-[color-mix(in_srgb,var(--gold-300)_28%,transparent)] bg-bg px-[28px] pt-[26px] pb-[40px] shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-[40px] place-items-center rounded-full border border-[color-mix(in_srgb,var(--gold-300)_30%,transparent)] text-[var(--gold-300)] transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)]"
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="mt-[48px]">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                      delay: 0.12 + i * 0.06,
                    }}
                    className="border-b border-hairline"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-[18px] font-serif text-[26px] leading-none tracking-[0.02em] text-fg transition-colors duration-300 [font-variant:small-caps] hover:text-[var(--gold-300)]"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="mt-auto text-[12px] tracking-[0.18em] text-fg-muted uppercase">
              Orpheus — Designer Portfolio
            </p>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
