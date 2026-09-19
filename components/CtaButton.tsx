type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

// Not wired up yet — no onClick handler. See TODO in README for what this
// should trigger (waitlist modal, signup flow, or checkout).
export default function CtaButton({ children, variant = "solid" }: CtaButtonProps) {
  return (
    <button className={`cta-btn${variant === "ghost" ? " ghost" : ""}`} type="button">
      {children}
    </button>
  );
}
