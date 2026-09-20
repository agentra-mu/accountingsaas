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
    a: "No. Finly sends a single link. The client opens it, uploads files, and submits — nothing to install, no password to remember or reset.",
  },
  {
    q: "What happens if something's missing?",
    a: "Finly compares what came in against the original request. Anything outstanding gets an automatic reminder on day 2, day 5, and day 7, and it stays visible on your dashboard until it's resolved.",
  },
  {
    q: "Can I review what Finly flags before it's marked done?",
    a: "Yes. Anything unclear is flagged for your review rather than silently marked received — you decide when a request is actually complete.",
  },
  {
    q: "How is this different from a client portal?",
    a: "A portal waits for the client to log in and act. Finly follows up on its own — it's the chasing, not just the storage.",
  },
  {
    q: "How does the AI know what documents to look for?",
    a: "It matches every uploaded file against the specific request you sent — bank statements, invoices, payroll reports, whatever you asked for — and confirms each one matches before marking it received.",
  },
  {
    q: "What happens if I upload the wrong document?",
    a: "The AI flags it as not matching the request and lets the client know what's still needed, rather than silently marking the request complete.",
  },
  {
    q: "Does the AI read the contents of my documents, or just the file names?",
    a: "It reads the actual contents of each document to verify it's the right type and extract the relevant data — not just the filename.",
  },
  {
    // NEEDS VERIFICATION: security/compliance claims below (encryption in
    // transit/at rest, data isolation, no training on customer data) must
    // be confirmed against Finly's actual infrastructure and any signed
    // DPAs/certifications before this goes live. Written conservatively
    // and without inventing specific certifications (SOC 2, GDPR, etc.)
    // until those are actually true and verifiable.
    q: "Is my document data secure when the AI processes it?",
    a: "Your documents stay in your firm's own account and are never shared across accounts. Data is encrypted in transit and at rest, and it isn't used to train any models. Ask us for our current security documentation if your firm needs it for a vendor review.",
  },
  {
    q: "What information does the AI extract from my documents?",
    a: "Key identifying details — dates, totals, account numbers, and similar fields — so you can quickly verify and reconcile without opening every file by hand.",
  },
  {
    q: "Can I review what the AI extracted before it's finalized?",
    a: "Yes. Your dashboard shows anything the AI flagged for review before a request is marked done, so nothing gets finalized without your sign-off.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <BlurFade>
          <p className="text-center font-mono text-[13px] text-accent">Questions</p>
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
