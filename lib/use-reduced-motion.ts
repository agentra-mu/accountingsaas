"use client";

import { useEffect, useState } from "react";

/**
 * Like motion's `useReducedMotion()`, but guaranteed `false` through the
 * first client render (matching SSR) and only updated in a `useEffect`
 * after mount. Needed anywhere the value feeds a `useTransform` output
 * range or other value that gets resolved into the rendered `style`
 * attribute — motion's own hook can resolve synchronously on the client's
 * first paint (before hydration completes), which disagrees with the
 * server (which has no way to know the OS preference) and breaks
 * hydration. Safe to use for `animate`/`transition` targets too, since
 * those are never part of the server-rendered HTML.
 */
export function useSafeReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
