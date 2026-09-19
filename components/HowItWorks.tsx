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
    <section className="page-section" id="how-it-works">
      <p className="kicker">How it works</p>
      <h2>Built around the request you already send today — just followed through.</h2>
      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.num}>
            <span className="num">{step.num}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
