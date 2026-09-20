import { cn } from "@/lib/utils";

interface RippleProps {
  circles?: number;
  baseSize?: number;
  className?: string;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
// Repurposed here as an ink-stamp click effect on CTA buttons.
export function Ripple({ circles = 4, baseSize = 60, className }: RippleProps) {
  return (
    <div
      aria-hidden
      data-slot="ripple"
      className={cn(
        "pointer-events-none absolute inset-0 grid place-items-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className
      )}
    >
      {Array.from({ length: circles }).map((_, i) => {
        const size = baseSize + i * 40;
        return (
          <span
            key={i}
            className="absolute animate-ripple-ring rounded-full border border-paper/40"
            style={{
              width: size,
              height: size,
              animationDelay: `${i * 0.5}s`,
              opacity: 1 - i / circles,
            }}
          />
        );
      })}
    </div>
  );
}
