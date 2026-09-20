import { CheckIcon, InboxIcon, LayoutDashboardIcon, ScanTextIcon, ShieldOffIcon, SparklesIcon } from "lucide-react";

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

const classifications = [
  { file: "statement_sept.pdf", label: "Bank statement" },
  { file: "inv_0921.pdf", label: "Invoice" },
  { file: "payroll_q3.pdf", label: "Payroll report" },
];

const extracted = [
  { field: "Date", value: "Sept 1, 2026" },
  { field: "Amount", value: "$12,450.00" },
  { field: "Account", value: "•••• 4821" },
];

export default function WhyFinly() {
  return (
    <section id="why-finly" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <BlurFade>
        <p className="text-center font-mono text-[13px] text-accent">Why firms switch</p>
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

          <BentoCard
            name="AI Document Reading"
            description="AI reads each upload and automatically classifies it — bank statement, invoice, payroll report."
            className="md:col-span-2"
            icon={<ScanTextIcon />}
            background={
              <div className="absolute inset-x-8 top-6 overflow-hidden rounded-md border border-rule bg-paper/90">
                <BorderBeam size={56} duration={8} reverse />
                <div className="p-4">
                  {classifications.map((row) => (
                    <div
                      key={row.file}
                      className="flex items-center justify-between gap-3 border-b border-rule py-2.5 font-mono text-[13px] last:border-b-0"
                    >
                      <span className="truncate text-ink-soft">{row.file}</span>
                      <span className="whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-accent">
                        {row.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <BentoCard
            name="Smart Data Extraction"
            description="Key dates, amounts, and account numbers pulled straight from the document — no digging through files."
            className="md:col-span-1"
            icon={<SparklesIcon />}
            background={
              <div className="absolute inset-x-6 top-6 overflow-hidden rounded-md border border-rule bg-paper/90 p-4">
                {extracted.map((row) => (
                  <div
                    key={row.field}
                    className="flex items-center justify-between border-b border-rule py-2 font-mono text-[12px] last:border-b-0"
                  >
                    <span className="text-ink-soft">{row.field}</span>
                    <span className="text-ink">{row.value}</span>
                  </div>
                ))}
              </div>
            }
          />
        </BentoGrid>
      </BlurFade>
    </section>
  );
}
