import CtaButton from "@/components/CtaButton";

export default function FinalCta() {
  return (
    <section className="border-t border-rule py-18">
      <p className="mb-3 font-mono text-[13px] text-kraft">Get started</p>
      <h2 className="mb-4 max-w-[18ch] font-serif text-[26px] font-medium tracking-tight sm:text-[34px]">
        Send your first request in under five minutes.
      </h2>
      <p className="mb-7 max-w-[44ch] text-base leading-relaxed text-ink-soft">
        No setup call, no client training. Write what you need, send the
        link, and let Docket do the following up.
      </p>
      <CtaButton>Get started free</CtaButton>
    </section>
  );
}
