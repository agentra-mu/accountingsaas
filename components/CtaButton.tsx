"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Ripple } from "@/components/velora/ripple";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

// Not wired up yet — no navigation/submit handler. See README TODO for what
// this should trigger (waitlist modal, signup flow, or checkout). The
// click still fires a small ink-stamp ripple, purely decorative.
export default function CtaButton({ children, variant = "solid", className }: CtaButtonProps) {
  const [stampKey, setStampKey] = useState<number | null>(null);

  useEffect(() => {
    if (stampKey === null) return;
    const t = setTimeout(() => setStampKey(null), 650);
    return () => clearTimeout(t);
  }, [stampKey]);

  return (
    <button
      type="button"
      onClick={() => setStampKey((k) => (k ?? 0) + 1)}
      className={cn(
        "relative isolate overflow-hidden rounded-[3px] px-5 py-2.5 font-sans text-sm font-semibold transition-colors",
        variant === "solid"
          ? "bg-ink text-paper hover:bg-ink/90"
          : "border border-ink bg-transparent text-ink hover:bg-ink/5",
        className
      )}
    >
      {stampKey !== null && (
        <Ripple circles={3} baseSize={8} className="[&_span]:border-paper/50" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
