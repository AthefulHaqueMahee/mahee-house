function ContactRoom() {
  const contacts = [
    {
      number: "01",
      label: "EMAIL",
      value: "athefulhaque@example.com",
      action: "mailto:athefulhaque@example.com",
      description: "For professional inquiries and collaboration.",
    },
    {
      number: "02",
      label: "GITHUB",
      value: "github.com/AthefulHaqueMahee",
      action: "https://github.com/AthefulHaqueMahee",
      description: "Explore my projects and development work.",
    },
    {
      number: "03",
      label: "LINKEDIN",
      value: "linkedin.com/in/ATHEFUL HAQUE",
      action: "https://www.linkedin.com/in/atheful-haque-3802423a8",
      description: "Connect with me professionally.",
    },
  ];

  return (
    <section className="contact-room">

      <div className="contact-header">

        <div>
          <p className="room-kicker">
            THE COMMUNICATION ROOM
          </p>

          <h1>
            Let's Connect
          </h1>

          <p className="contact-intro">
            Have an idea, opportunity or simply want to
            say hello? Choose a way to reach me.
          </p>
        </div>

        <div className="contact-status">
          <span className="status-dot" />
          AVAILABLE
        </div>

      </div>


      <div className="contact-grid">

        {contacts.map((contact) => (
          <a
            key={contact.number}
            href={contact.action}
            target={
              contact.label === "EMAIL"
                ? "_self"
                : "_blank"
            }
            rel="noreferrer"
            className="contact-card"
          >

            <div className="contact-card-top">

              <span className="contact-number">
                {contact.number}
              </span>

              <span className="contact-label">
                {contact.label}
              </span>

            </div>

            <h3>
              {contact.label === "EMAIL"
                ? "Send Me an Email"
                : contact.label === "GITHUB"
                ? "View My GitHub"
                : "Connect on LinkedIn"}
            </h3>

            <p className="contact-value">
              {contact.value}
            </p>

            <p className="contact-description">
              {contact.description}
            </p>

            <span className="contact-arrow">
              CONNECT →
            </span>

          </a>
        ))}

      </div>


      <div className="contact-message">

        <span className="message-line" />

        <div>
          <span className="message-label">
            OPEN FOR
          </span>

          <h2>
            Opportunities · Collaboration · Ideas
          </h2>
        </div>

        <span className="message-line" />

      </div>

    </section>
  );
}

export default ContactRoom;