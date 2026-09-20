import CtaButton from "@/components/CtaButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-rule py-7">
      <div className="font-serif text-[22px] font-semibold tracking-tight">
        Docket<span className="text-kraft">.</span>
      </div>
      <CtaButton>Get started</CtaButton>
    </header>
  );
}
