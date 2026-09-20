import CtaButton from "@/components/CtaButton";
import Ledger from "@/components/Ledger";
import { BorderBeam } from "@/components/velora/border-beam";

export default function Hero() {
  return (
    <section className="pb-14 pt-14 sm:pt-16">
      <h1 className="max-w-[15ch] font-serif text-[34px] font-medium leading-[1.08] tracking-tight sm:text-[54px]">
        Stop chasing clients for documents.
      </h1>
      <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
        Send one link. Docket reads what comes back, checks it against what
        you asked for, and chases anything missing — so you don&apos;t have
        to.
      </p>
      <div className="mt-8 flex items-center gap-3.5">
        <CtaButton>Get started free</CtaButton>
        <a
          href="#how-it-works"
          className="rounded-[3px] border border-ink px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          See how it works
        </a>
      </div>
      <p className="mt-3.5 text-[13px] text-ink-soft">No client login required. Works from any phone.</p>

      <div className="relative mt-14 rounded-[4px]">
        <BorderBeam size={80} duration={10} />
        <Ledger />
      </div>
    </section>
  );
}
