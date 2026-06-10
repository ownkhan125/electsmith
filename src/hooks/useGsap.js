'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * useGsap — runs a GSAP context bound to a scope ref. Returns the ref so the
 * component can spread it on its root element.
 *
 * @param {() => void} callback Fires inside `gsap.context` on mount.
 * @param {ReadonlyArray<unknown>} deps  Deps for the effect.
 * @returns {React.RefObject<HTMLElement>}
 */

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useGsap(callback, deps = []) {
  const scopeRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback, scopeRef)
    return () => ctx.revert()
  }, deps)

  return scopeRef
}
