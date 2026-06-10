"use client";

import { useEffect, useRef } from "react";

/**
 * useMagnetic — applies inertia magnetic pull to an element.
 *  strength: number (0-1)
 */
export function useMagnetic(strength = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    let cur = { x: 0, y: 0 };
    let tgt = { x: 0, y: 0 };

    const loop = () => {
      cur.x += (tgt.x - cur.x) * 0.12;
      cur.y += (tgt.y - cur.y) * 0.12;
      el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tgt.x = (e.clientX - (r.left + r.width / 2)) * strength;
      tgt.y = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onLeave = () => {
      tgt.x = 0;
      tgt.y = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
