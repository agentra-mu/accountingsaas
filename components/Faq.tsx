import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/velora/blur-fade";

const faqs = [
  {
    q: "Does the client need to create an account?",
    a: "No. Docket sends a single link. The client opens it, uploads files, and submits — nothing to install, no password to remember or reset.",
  },
  {
    q: "What happens if something's missing?",
    a: "Docket compares what came in against the original request. Anything outstanding gets an automatic reminder on day 2, day 5, and day 7, and it stays visible on your dashboard until it's resolved.",
  },
  {
    q: "Can I review what Docket flags before it's marked done?",
    a: "Yes. Anything unclear is flagged for your review rather than silently marked received — you decide when a request is actually complete.",
  },
  {
    q: "How is this different from a client portal?",
    a: "A portal waits for the client to log in and act. Docket follows up on its own — it's the chasing, not just the storage.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <BlurFade>
          <p className="text-center font-mono text-[13px] text-kraft">Questions</p>
          <h2 className="mx-auto mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Before you send your first request.
          </h2>
        </BlurFade>

        <BlurFade delay={0.12}>
          <Accordion type="single" collapsible className="mt-14">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="font-sans text-[15px]">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[15px]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
