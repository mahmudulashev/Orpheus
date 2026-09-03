import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type GoldButtonProps = BaseProps & Omit<ComponentProps<typeof Link>, "children">;

/**
 * Figma: "Gold Button" — 50px tall, metallic fill, dark label.
 */
export function GoldButton({
  children,
  className,
  iconLeft,
  iconRight,
  ...props
}: GoldButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group relative inline-flex h-[50px] items-center justify-center gap-[8px]",
        "rounded-[4px] px-[24px] text-[14px] font-semibold uppercase tracking-[0.06em]",
        "bg-gold-gradient text-[#1c1405]",
        "shadow-[0_6px_24px_-10px_rgba(224,168,69,0.9)]",
        "transition-[transform,box-shadow,filter] duration-300 ease-out",
        "hover:-translate-y-[2px] hover:brightness-110 hover:shadow-[0_12px_30px_-10px_rgba(224,168,69,0.85)]",
        "active:translate-y-0",
        className,
      )}
    >
      {iconLeft}
      <span className="whitespace-nowrap">{children}</span>
      {iconRight}
    </Link>
  );
}

/**
 * Figma: "Gold Outlined Button" — 54px tall, hairline gold border, gold label.
 */
export function GoldOutlineButton({
  children,
  className,
  iconLeft,
  iconRight,
  ...props
}: GoldButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group relative inline-flex h-[54px] items-center justify-center gap-[10px]",
        "rounded-[2px] px-[24px] text-[14px] font-medium uppercase tracking-[0.14em]",
        "border border-[color-mix(in_srgb,var(--gold-300)_55%,transparent)]",
        "text-[var(--gold-300)]",
        "transition-[background-color,border-color,color,transform] duration-300 ease-out",
        "hover:-translate-y-[2px] hover:border-[var(--gold-300)]",
        "hover:bg-[color-mix(in_srgb,var(--gold-300)_12%,transparent)]",
        "active:translate-y-0",
        className,
      )}
    >
      {iconLeft}
      <span className="whitespace-nowrap">{children}</span>
      {iconRight}
    </Link>
  );
}
