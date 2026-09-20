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
    <section id="how-it-works" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <BlurFade>
          <p className="font-mono text-[13px] text-kraft">How it works</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Built around the request you already send today — just followed through.
          </h2>
        </BlurFade>

        <TracingBeam className="mt-16 ml-6 max-w-2xl md:ml-8">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <BlurFade key={step.num} delay={i * 0.06} offset={10}>
                <div className="grid grid-cols-[48px_1fr] gap-5">
                  <span className="pt-0.5 font-mono text-[13px] text-kraft">{step.num}</span>
                  <div>
                    <h3 className="mb-1.5 font-sans text-[17px] font-semibold">{step.title}</h3>
                    <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
