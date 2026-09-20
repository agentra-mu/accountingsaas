import CtaButton from "@/components/CtaButton";
import { BorderBeam } from "@/components/velora/border-beam";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";

export default function FinalCta() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <BlurFade>
          <div className="relative overflow-hidden rounded-2xl border border-rule bg-paper-raised px-8 py-16 text-center sm:px-16">
            <BorderBeam size={100} duration={12} />
            <GridPattern
              width={40}
              height={40}
              className="opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            />
            <div className="relative">
              <p className="font-mono text-[13px] text-kraft">Get started</p>
              <h2 className="mx-auto mt-3 max-w-md font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                Send your first request in under five minutes.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                No setup call, no client training. Write what you need, send
                the link, and let Docket do the following up.
              </p>
              <div className="mt-8 flex justify-center">
                <CtaButton>Get started free</CtaButton>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
