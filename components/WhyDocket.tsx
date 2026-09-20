import { CheckIcon, InboxIcon, LayoutDashboardIcon, ShieldOffIcon } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/velora/bento-grid";
import { BorderBeam } from "@/components/velora/border-beam";
import { Marquee } from "@/components/velora/marquee";
import { NumberTicker } from "@/components/velora/number-ticker";
import { Ripple } from "@/components/velora/ripple";
import { BlurFade } from "@/components/velora/blur-fade";

const checklist = [
  { label: "Bank statements", done: true },
  { label: "Invoices — September", done: true },
  { label: "Payroll report", done: false },
];

const reminders = [
  "Reminder sent — day 2",
  "Reminder sent — day 5",
  "Flagged overdue — day 7",
  "Client notified — day 8",
  "Reminder sent — day 2",
  "Flagged overdue — day 7",
];

export default function WhyDocket() {
  return (
    <section id="why-docket" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <BlurFade>
        <p className="text-center font-mono text-[13px] text-kraft">Why firms switch</p>
        <h2 className="mx-auto mt-3 max-w-xl text-center font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          The part of the job nobody bills for, finally off your plate.
        </h2>
      </BlurFade>

      <BlurFade delay={0.15}>
        <BentoGrid className="mt-14">
          <BentoCard
            name="No client accounts"
            description="Nothing for clients to install, log into, or reset a password for."
            className="md:col-span-1"
            icon={<ShieldOffIcon />}
            background={
              <div className="relative flex size-full items-center justify-center">
                <Ripple circles={5} baseSize={100} />
                <span className="font-serif text-6xl font-medium text-ink/10">
                  <NumberTicker value={0} />
                </span>
              </div>
            }
          />

          <BentoCard
            name="Checked against the request"
            description="Every file is read and matched to the checklist — nothing is silently marked received."
            className="md:col-span-2"
            icon={<CheckIcon />}
            background={
              <div className="absolute inset-x-8 top-6 overflow-hidden rounded-md border border-rule bg-paper/90">
                <BorderBeam size={56} duration={7} />
                <div className="p-4">
                  {checklist.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 border-b border-rule py-2.5 font-mono text-[13px] last:border-b-0"
                    >
                      <span
                        className={
                          item.done
                            ? "flex size-4 items-center justify-center rounded-full bg-stamp-green text-paper"
                            : "flex size-4 items-center justify-center rounded-full border border-kraft text-kraft"
                        }
                      >
                        {item.done && <CheckIcon className="size-2.5" strokeWidth={3} />}
                      </span>
                      <span className={item.done ? "text-ink-soft" : "text-kraft"}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <BentoCard
            name="Missing items get chased automatically"
            description="Reminders go out on day 2, 5, and 7 — the follow-up you'd otherwise send by hand."
            className="md:col-span-2"
            icon={<InboxIcon />}
            background={
              <div className="absolute inset-x-10 top-4 bottom-24">
                <Marquee vertical pauseOnHover className="h-full [--duration:22s]">
                  {reminders.map((line, i) => (
                    <div
                      key={`${line}-${i}`}
                      className="rounded-md border border-rule bg-paper/90 px-4 py-2.5 font-mono text-[13px] text-ink-soft"
                    >
                      {line}
                    </div>
                  ))}
                </Marquee>
              </div>
            }
          />

          <BentoCard
            name="One dashboard"
            description="Complete, waiting, and overdue — at a glance, instead of forty email threads."
            className="md:col-span-1"
            icon={<LayoutDashboardIcon />}
            background={
              <div className="flex size-full items-center justify-center">
                <span className="font-serif text-6xl font-medium text-ink/10">
                  <NumberTicker value={1} />
                </span>
              </div>
            }
          />
        </BentoGrid>
      </BlurFade>
    </section>
  );
}
