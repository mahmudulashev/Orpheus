"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Figma: "Nav" — 96px bar, logo left, small-caps links + theme toggle right. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled &&
          "bg-[var(--nav-bg)] shadow-[0_1px_0_0_var(--hairline)] backdrop-blur-xl",
      )}
    >
      <nav className="container-nav flex h-[96px] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-[34px] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-[36px] place-items-center text-fg"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-hairline bg-[var(--nav-bg)] backdrop-blur-xl lg:hidden"
          >
            <ul className="container-nav flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-[22px] tracking-[0.02em] text-fg [font-variant:small-caps]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative font-serif text-[20px] leading-none tracking-[0.015em] text-fg [font-variant:small-caps]"
    >
      {children}
      <span className="absolute -bottom-[6px] left-0 h-px w-0 bg-[var(--gold-300)] transition-[width] duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
