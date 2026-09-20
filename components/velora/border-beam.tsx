"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  colorFrom?: string;
  colorTo?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function BorderBeam({
  className,
  size = 64,
  duration = 6,
  delay = 0,
  reverse = false,
  colorFrom = "var(--brand-from)",
  colorTo = "var(--brand-to)",
}: BorderBeamProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      data-slot="border-beam"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] motion-reduce:hidden"
    >
      <motion.div
        className={cn(
          "absolute aspect-square bg-gradient-to-l from-(--beam-from) via-(--beam-to) to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--beam-from": colorFrom,
            "--beam-to": colorTo,
          } as React.CSSProperties
        }
        initial={{ offsetDistance: reverse ? "100%" : "0%" }}
        animate={
          reducedMotion
            ? undefined
            : { offsetDistance: reverse ? "0%" : "100%" }
        }
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
        }}
      />
    </div>
  );
}
