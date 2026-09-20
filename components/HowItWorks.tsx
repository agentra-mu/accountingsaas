import { BlurFade } from "@/components/velora/blur-fade";
import { TracingBeam } from "@/components/velora/tracing-beam";

const steps = [
  {
    num: "01",
    title: "Write the request once",
    body: `"Send me your September bank statements, invoices, and payroll report by the 15th." Docket turns it into a checklist and a link — nothing for the client to install or log into.`,
  },
  {
    num: "02",
    title: "Client uploads from their phone",
    body: "They open the link, drop in files, and submit. No account, no portal to remember a password for.",
  },
  {
    num: "03",
    title: "Docket checks it against the request",
    body: "Each file is read and matched to what was asked for. Anything unclear gets flagged for your review instead of silently marked received.",
  },
  {
    num: "04",
    title: "Missing items get chased automatically",
    body: "Reminders go out on day 2, day 5, and day 7 until everything arrives — the follow-up you'd otherwise be doing by email and WhatsApp.",
  },
  {
    num: "05",
    title: "You see one dashboard, not forty threads",
    body: "Complete, waiting, and overdue, at a glance. Click a client to review what came in and mark the request done.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-rule py-18" id="how-it-works">
      <p className="mb-3 font-mono text-[13px] text-kraft">How it works</p>
      <h2 className="mb-10 max-w-[22ch] font-serif text-[26px] font-medium tracking-tight sm:text-[34px]">
        Built around the request you already send today — just followed through.
      </h2>
      <TracingBeam className="ml-6 md:ml-8">
        <div className="rounded-[4px] border border-rule bg-paper-raised">
          {steps.map((step, i) => (
            <BlurFade key={step.num} delay={i * 0.06} offset={10}>
              <div className="grid grid-cols-[48px_1fr] gap-5 border-b border-rule px-6 py-6 last:border-b-0 sm:grid-cols-[64px_1fr]">
                <span className="pt-0.5 font-mono text-[13px] text-kraft">{step.num}</span>
                <div>
                  <h3 className="mb-1.5 font-sans text-[17px] font-semibold">{step.title}</h3>
                  <p className="max-w-[56ch] text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
