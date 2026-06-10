"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGsap(callback, deps = []) {
  const scopeRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback, scopeRef);
    return () => ctx.revert();
  }, deps);

  return scopeRef;
}
