const values = [
  { big: "0", label: "Client logins to manage or reset" },
  { big: "3", label: "Automatic reminders per outstanding item" },
  { big: "1", label: "Dashboard instead of scattered email threads" },
];

export default function ValueStrip() {
  return (
    <section className="page-section">
      <p className="kicker">Why firms switch</p>
      <h2>The part of the job nobody bills for, finally off your plate.</h2>
      <div className="value-strip">
        {values.map((value) => (
          <div className="value-cell" key={value.label}>
            <div className="big">{value.big}</div>
            <div className="label">{value.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
