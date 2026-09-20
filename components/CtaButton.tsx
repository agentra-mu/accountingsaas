"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Ripple } from "@/components/velora/ripple";
import { ShimmerButton } from "@/components/velora/shimmer-button";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  size?: "default" | "sm";
  className?: string;
};

// Not wired up yet — no navigation/submit handler. See README TODO for what
// this should trigger (waitlist modal, signup flow, or checkout). The
// click still fires a small ink-stamp ripple, purely decorative.
export default function CtaButton({
  children,
  variant = "solid",
  size = "default",
  className,
}: CtaButtonProps) {
  const [stampKey, setStampKey] = useState<number | null>(null);

  useEffect(() => {
    if (stampKey === null) return;
    const t = setTimeout(() => setStampKey(null), 650);
    return () => clearTimeout(t);
  }, [stampKey]);

  const stamp = stampKey !== null && (
    <Ripple circles={3} baseSize={8} className="[&_span]:border-paper/50" />
  );

  if (variant === "solid") {
    return (
      <span className="relative inline-block isolate">
        <ShimmerButton
          onClick={() => setStampKey((k) => (k ?? 0) + 1)}
          className={cn(size === "sm" && "h-9 px-4 text-[13px]", className)}
        >
          {children}
        </ShimmerButton>
        {stamp}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setStampKey((k) => (k ?? 0) + 1)}
      className={cn(
        "relative isolate inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-ink/70 px-6 font-sans text-sm font-semibold text-ink transition-colors hover:bg-ink/5",
        size === "sm" && "h-9 px-4 text-[13px]",
        className
      )}
    >
      {stamp}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
