"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSafeReducedMotion } from "@/lib/use-reduced-motion";

const SESSION_KEY = "finly-splash-shown";
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

// Full sequence timings (seconds, relative to mount).
const T_DOC_IN = 0;
const T_SWEEP = 0.45;
const SWEEP_DURATION = 0.9;
const T_CHECK = 1.45;
const T_CLUSTER_OUT = 1.95;
const T_WORDMARK_IN = 2.15;
const AUTO_DISMISS_MS = 2900;

const REDUCED_HOLD_MS = 900;

const lineWidths = [58, 46, 50, 34];

function DocumentSeal() {
  return (
    <div className="relative h-[132px] w-[100px]">
      <svg
        viewBox="0 0 100 132"
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden
      >
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T_DOC_IN, duration: 0.5, ease: EASE }}
        >
          {/* document body with folded corner */}
          <path
            d="M4 4H72L96 28V128H4V4Z"
            fill="var(--paper-raised)"
            stroke="var(--rule)"
            strokeWidth="2"
          />
          <path d="M72 4V28H96L72 4Z" fill="var(--rule)" opacity="0.6" />

          {/* text lines, sweep-colored */}
          {lineWidths.map((w, i) => (
            <motion.rect
              key={i}
              x={16}
              y={48 + i * 16}
              width={w}
              height={5}
              rx={2.5}
              initial={{ fill: "var(--rule)" }}
              animate={{ fill: ["var(--rule)", "var(--accent)", "var(--ink-soft)"] }}
              transition={{
                delay: T_SWEEP + (i / lineWidths.length) * SWEEP_DURATION,
                duration: 0.5,
                times: [0, 0.4, 1],
                ease: EASE,
              }}
            />
          ))}

          {/* checkmark seal */}
          <motion.circle
            cx={50}
            cy={116}
            r={13}
            fill="var(--accent)"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: T_CHECK, duration: 0.3, ease: EASE }}
            style={{ transformOrigin: "50px 116px" }}
          />
          <motion.path
            d="M44 116l4.5 4.5L57 111"
            fill="none"
            stroke="var(--accent-foreground)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: T_CHECK + 0.12, duration: 0.35, ease: EASE }}
          />
        </motion.g>
      </svg>

      {/* scan beam */}
      <motion.div
        aria-hidden
        className="absolute inset-x-[-10%] h-10 blur-md"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--accent) 55%, transparent), transparent)",
        }}
        initial={{ top: "-10%", opacity: 0 }}
        animate={{ top: ["-10%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ delay: T_SWEEP, duration: SWEEP_DURATION, ease: EASE, times: [0, 0.15, 0.85, 1] }}
      />
    </div>
  );
}

// Always mounts the same elements regardless of `reduced` — only the
// animate targets/transition timing differ. Branching which components
// render based on a client-only value (like useReducedMotion()) would
// make the client's first paint diverge from the server-rendered HTML
// and break hydration; varying animation targets/timing does not, since
// those only take effect after mount.
function Sequence({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative flex h-[132px] w-[160px] items-center justify-center">
      <motion.div
        className="absolute"
        initial={{ opacity: 1, scale: 1 }}
        animate={reduced ? { opacity: 0, scale: 1 } : { opacity: 0, scale: 0.88 }}
        transition={reduced ? { duration: 0 } : { delay: T_CLUSTER_OUT, duration: 0.4, ease: EASE }}
      >
        <DocumentSeal />
      </motion.div>
      <motion.span
        className="absolute font-serif text-4xl font-semibold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduced ? 0 : T_WORDMARK_IN, duration: 0.5, ease: EASE }}
      >
        Finly<span className="text-accent">.</span>
      </motion.span>
    </div>
  );
}

export default function Splash({ children }: { children: React.ReactNode }) {
  // Default to visible on both server and first client render, so there's
  // no flash of the main site before the overlay appears (and no
  // hydration mismatch). The effect below hides it immediately if this
  // session has already seen it.
  const [visible, setVisible] = useState(true);
  const dismissedRef = useRef(false);
  const reducedMotion = useSafeReducedMotion();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (privacy mode, etc.) — just show it once.
    }
    if (seen) setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const dismiss = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
      setVisible(false);
    };

    const timer = setTimeout(dismiss, reducedMotion ? REDUCED_HOLD_MS : AUTO_DISMISS_MS);

    const onKey = () => dismiss();
    const onClick = () => dismiss();
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [visible, reducedMotion]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-paper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Sequence reduced={!!reducedMotion} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
