import { useId } from "react";

import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
// Doubles as literal graph-paper texture behind the hero — a ledger pad.
export function GridPattern({ width = 40, height = 40, x = -1, y = -1, className, ...props }: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden
      data-slot="grid-pattern"
      className={cn("pointer-events-none absolute inset-0 size-full stroke-rule", className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
