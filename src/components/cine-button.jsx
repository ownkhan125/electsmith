"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";

/**
 * CineButton — premium CTA.
 *  variants:
 *    "primary"   — filled plum, gentle lift, inset sweep
 *    "ghost"     — outline that fills on hover
 *    "on-dark"   — cream pill for use on plum/ink backgrounds
 */
const CineButton = ({
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
}) => {
  const variantCls =
    variant === "ghost"
      ? "cine-btn--ghost"
      : variant === "on-dark"
      ? "cine-btn--on-dark"
      : "";

  const sizeCls = size === "sm" ? "text-xs px-4 py-2.5" : "";

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
      <span className="cine-arrow relative z-10" aria-hidden>
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  const cls = cn("cine-btn", variantCls, sizeCls, className);

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
    >
      {inner}
    </button>
  );
};

export default CineButton;
