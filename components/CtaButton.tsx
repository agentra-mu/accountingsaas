"use client";

import { useWaitlist } from "@/components/waitlist/WaitlistContext";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

export default function CtaButton({ children, variant = "solid" }: CtaButtonProps) {
  const { openWaitlist } = useWaitlist();

  return (
    <button
      className={`cta-btn${variant === "ghost" ? " ghost" : ""}`}
      onClick={openWaitlist}
      type="button"
    >
      {children}
    </button>
  );
}
