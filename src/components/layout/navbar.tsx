"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Figma: "Nav" — 96px bar, logo left, small-caps links + theme toggle right. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          scrolled &&
            "bg-[var(--nav-bg)] shadow-[0_1px_0_0_var(--hairline)] backdrop-blur-xl",
        )}
      >
        <nav className="container-nav flex h-[96px] items-center justify-between pt-[22px]">
          <Logo />

          <div className="hidden items-center gap-[51px] lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-[18px] lg:hidden">
            <ThemeToggle />
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={close} />
    </>
  );
}

/** Three rules that collapse into an X while the drawer is open. */
function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  const rules = [
    { y: -7, rotate: 45, width: "100%" },
    { y: 0, rotate: 0, width: "70%" },
    { y: 7, rotate: -45, width: "100%" },
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="group relative grid size-[32px] place-items-center"
    >
      <span className="relative block h-[16px] w-[26px]">
        {rules.map((rule, i) => (
          <motion.span
            key={i}
            initial={false}
            animate={
              open
                ? {
                    y: 0,
                    rotate: i === 1 ? 0 : rule.rotate,
                    opacity: i === 1 ? 0 : 1,
                    width: "100%",
                  }
                : { y: rule.y, rotate: 0, opacity: 1, width: rule.width }
            }
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 right-0 block h-[1.5px] -translate-y-1/2 rounded-full bg-fg transition-colors duration-300 group-hover:bg-[var(--gold-300)]"
          />
        ))}
      </span>
    </button>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative font-serif text-[20px] leading-none font-semibold tracking-[0.005em] text-fg [font-variant:small-caps]"
    >
      {children}
      <span className="absolute -bottom-[6px] left-0 h-px w-0 bg-[var(--gold-300)] transition-[width] duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
