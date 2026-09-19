import CtaButton from "@/components/CtaButton";
import Ledger from "@/components/Ledger";

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <h1>Stop chasing clients for documents.</h1>
      <p className="sub">
        Send one link. Docket reads what comes back, checks it against what
        you asked for, and chases anything missing — so you don&apos;t have
        to.
      </p>
      <div className="hero-actions">
        <CtaButton>Get started free</CtaButton>
        <a href="#how-it-works" className="cta-btn ghost" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          See how it works
        </a>
      </div>
      <p className="hero-note">No client login required. Works from any phone.</p>

      <Ledger />
    </section>
  );
}
