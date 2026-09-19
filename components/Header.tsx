import CtaButton from "@/components/CtaButton";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wordmark">
        Docket<span>.</span>
      </div>
      <CtaButton>Get started</CtaButton>
    </header>
  );
}
