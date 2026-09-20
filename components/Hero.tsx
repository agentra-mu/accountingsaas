import CtaButton from "@/components/CtaButton";
import Ledger from "@/components/Ledger";
import { BorderBeam } from "@/components/velora/border-beam";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { NumberTicker } from "@/components/velora/number-ticker";

const stats = [
  { value: 0, label: "Client logins to manage" },
  { value: 3, label: "Reminders per open item" },
  { value: 1, label: "Dashboard, not forty threads" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <GridPattern
        width={44}
        height={44}
        className="[mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <BlurFade delay={0} direction="down">
          <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-paper-raised/80 px-4 py-1.5 font-mono text-[13px] text-ink-soft backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" />
            Built for accounting firms, not client portals
          </span>
        </BlurFade>

        <BlurFade delay={0.12}>
          <h1 className="mx-auto mt-8 max-w-3xl font-serif text-[38px] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[64px]">
            Stop chasing clients for documents.
          </h1>
        </BlurFade>

        <BlurFade delay={0.24}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Send one link. Finly reads what comes back, checks it against
            what you asked for, and chases anything missing — so you
            don&apos;t have to.
          </p>
        </BlurFade>

        <BlurFade delay={0.36}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CtaButton>Get started free</CtaButton>
            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center justify-center rounded-full px-6 font-sans text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              See how it works ↓
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.45}>
          <p className="mt-5 text-[13px] text-ink-soft">
            No client login required. Works from any phone.
          </p>
        </BlurFade>

        <BlurFade delay={0.58} offset={28}>
          <div className="relative mx-auto mt-16 max-w-3xl rounded-[6px] border border-rule bg-paper-raised p-2 text-left shadow-2xl shadow-ink/10">
            <BorderBeam size={80} duration={10} />
            <Ledger />
          </div>
        </BlurFade>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.7 + i * 0.08}>
              <div className="flex flex-col items-center gap-1">
                <span className="font-serif text-3xl font-medium tracking-tight">
                  <NumberTicker value={stat.value} />
                </span>
                <span className="text-center text-[13px] text-ink-soft">{stat.label}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
