"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: number;
  color?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function SpotlightCard({
  children,
  className,
  radius = 280,
  color = "color-mix(in oklab, var(--kraft) 16%, transparent)",
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      data-slot="spotlight-card"
      onMouseMove={handleMouseMove}
      className={cn("group relative overflow-hidden", className)}
      style={{ "--spot-radius": `${radius}px`, "--spot-color": color } as React.CSSProperties}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(var(--spot-radius) circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-color), transparent 65%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
