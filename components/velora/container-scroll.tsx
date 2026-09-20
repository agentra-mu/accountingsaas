"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/use-reduced-motion";

interface ContainerScrollProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function ContainerScroll({ header, children, className }: ContainerScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Keep the `style` prop's shape identical regardless of `reducedMotion`
  // (always the same MotionValue keys) — only the output range collapses to
  // a no-op when reduced. Toggling the prop itself between an object and
  // `undefined` based on a client-only value would make the client's first
  // paint diverge from the server-rendered HTML and break hydration.
  const rotateX = useTransform(scrollYProgress, [0, 0.45], reducedMotion ? [0, 0] : [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], reducedMotion ? [1, 1] : [0.94, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.45], reducedMotion ? [0, 0] : [32, 0]);

  return (
    <div ref={ref} data-slot="container-scroll" className={cn("flex flex-col items-center", className)}>
      {header && (
        <motion.div style={{ y: translateY }} className="mb-10 text-center">
          {header}
        </motion.div>
      )}
      <motion.div
        style={{ rotateX, scale, transformPerspective: 1200 }}
        className="w-full origin-top rounded-md border border-rule bg-card p-2 shadow-2xl shadow-ink/10 will-change-transform"
      >
        <div className="overflow-hidden rounded-sm border border-rule bg-paper-raised">{children}</div>
      </motion.div>
    </div>
  );
}
