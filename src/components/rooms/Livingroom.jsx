import { Mail, Download } from "lucide-react";

function LivingRoom() {
  return (
    <section className="profile-room">

      <p className="room-kicker">THE LIVING ROOM</p>

      <div className="profile-intro">

        <div className="profile-text">

          <span className="hello-text">
            HELLO, I'M
          </span>

          <h1>
            Mahee.
          </h1>

          <h2>
            Software Engineering Student
            <br />
            & Developer
          </h2>

          <p>
            I'm a Software Engineering student passionate about
            building useful software, exploring modern web
            technologies, and turning ideas into real-world
            digital experiences.
          </p>

          <div className="profile-buttons">

            <a
              href="/mahee-cv.pdf"
              className="cv-button"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              View My CV
            </a>

            <a
              href="mailto:athefulhaque@gmail.com"
              className="contact-button"
            >
              <Mail size={17} />
              Contact Me
            </a>

          </div>

         

        </div>

        <div className="profile-card">

          <div className="profile-card-top">
            <span>🏡</span>
            <span>Mahee's Living Room</span>
          </div>

          <div className="profile-avatar">
            M
          </div>

          <h3>
            MD Atheful Haque Mahee
          </h3>

          <p>
            Software Engineering
          </p>

          <div className="profile-location">
            📍 Bangladesh
          </div>

        </div>

      </div>

    </section>
  );
}

export default LivingRoom;