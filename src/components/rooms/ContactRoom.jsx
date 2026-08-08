function ContactRoom() {
  return (
    <section className="contact-room">

      <p className="room-kicker">THE FRONT DESK</p>

      <h1>Let's Connect ✉️</h1>

      <p className="contact-intro">
        Whether you have an opportunity, a project idea,
        or simply want to say hello, feel free to reach out.
      </p>

      <div className="contact-grid">

        <a
          className="contact-card"
          href="mailto:your-email@example.com"
        >
          <span className="contact-icon">✉</span>

          <div>
            <small>EMAIL</small>
            <strong>athefulhaque@gmail.com</strong>
          </div>
        </a>

        <a
          className="contact-card"
          href="https://github.com/AthefulHaqueMahee"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">⌘</span>

          <div>
            <small>GITHUB</small>
            <strong>View my repositories</strong>
          </div>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/atheful-haque-3802423a8"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">in</span>

          <div>
            <small>LINKEDIN</small>
            <strong>Connect with me</strong>
          </div>
        </a>

        <div className="contact-card">
          <span className="contact-icon">📍</span>

          <div>
            <small>LOCATION</small>
            <strong>Bangladesh</strong>
          </div>
        </div>

      </div>

      <div className="contact-note">
        <span>☕</span>
        <p>
          Thanks for visiting my little digital house.
        </p>
      </div>

    </section>
  );
}

export default ContactRoom;