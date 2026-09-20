"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function ContainerScroll({ header, children, className }: ContainerScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.45], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.94, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.45], [32, 0]);

  return (
    <div ref={ref} data-slot="container-scroll" className={cn("flex flex-col items-center", className)}>
      {header && (
        <motion.div style={reducedMotion ? undefined : { y: translateY }} className="mb-10 text-center">
          {header}
        </motion.div>
      )}
      <motion.div
        style={reducedMotion ? undefined : { rotateX, scale, transformPerspective: 1200 }}
        className="w-full origin-top rounded-md border border-rule bg-card p-2 shadow-2xl shadow-ink/10 will-change-transform"
      >
        <div className="overflow-hidden rounded-sm border border-rule bg-paper-raised">{children}</div>
      </motion.div>
    </div>
  );
}
