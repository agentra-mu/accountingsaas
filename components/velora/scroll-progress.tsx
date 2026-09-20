"use client";

import { motion, useScroll, useSpring } from "motion/react";

import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/use-reduced-motion";

interface ScrollProgressProps {
  className?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });
  const reducedMotion = useSafeReducedMotion();

  return (
    <motion.div
      aria-hidden
      data-slot="scroll-progress"
      className={cn(
        "fixed inset-x-0 top-0 z-60 h-[3px] origin-left bg-gradient-to-r from-brand-from via-brand-via to-brand-to",
        className
      )}
      style={{ scaleX: reducedMotion ? scrollYProgress : scaleX }}
    />
  );
}
