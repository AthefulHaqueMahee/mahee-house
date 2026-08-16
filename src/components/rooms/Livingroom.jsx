import {
  Mail,
  Download,
  MapPin,
  Code2,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./LivingRoom.css";

function LivingRoom() {
  const stats = [
    {
      value: "3.97",
      label: "CURRENT CGPA",
    },
    {
      value: "05+",
      label: "PROJECTS",
    },
    {
      value: "∞",
      label: "CURIOSITY",
    },
    {
      value: "01",
      label: "GOAL",
    },
  ];

  const journey = [
    {
      year: "2020",
      title: "SSC",
      place: "St. Gregory's High School & College",
      description:
        "Completed Secondary School Certificate in 2020 with GPA 5.00 under the Dhaka Education Board.",
    },

    {
      year: "2022",
      title: "HSC",
      place: "Notre Dame College, Dhaka",
      description:
        "Completed Higher Secondary Certificate in 2022 with GPA 5.00 (Golden) under the Dhaka Education Board.",
    },

    {
      year: "NOW",
      title: "Software Engineering",
      place: "Daffodil International University",
      description:
        "Currently pursuing B.Sc. in Software Engineering and building real-world software projects.",
    },
  ];

  return (
    <section className="living-room">

      {/* ================================
          HEADER
      ================================= */}

      <div className="about-top">

        <p className="room-kicker">
          THE LIVING ROOM
        </p>

        <div className="about-title-row">

          <h1>
            About Me<span>.</span>
          </h1>

          <Sparkles
            className="about-sparkle"
            size={25}
          />

        </div>

        <p className="about-subtitle">
          Software Engineering Student · Developer ·
          Problem Solver
        </p>

      </div>


      {/* ================================
          HERO SECTION
      ================================= */}

      <div className="about-hero">

        {/* LEFT SIDE */}

        <div className="about-main">

          <span className="hello-label">
            HELLO, I'M
          </span>

          <h2>
            Mahee<span>.</span>
          </h2>

          <h3>
            Software Engineering Student
            <br />
            <strong>& Developer</strong>
          </h3>

          <p className="about-description">
            I'm a Software Engineering student passionate
            about building useful software, exploring
            modern web technologies, and turning ideas into
            real-world digital experiences.
          </p>


          {/* BUTTONS */}

          <div className="about-buttons">

            <a
              href="/mahee_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-primary-button"
            >

              <Download size={17} />

              View My CV

              <ArrowUpRight size={15} />

            </a>


            <a
              href="mailto:athefulhaque@gmail.com"
              className="about-secondary-button"
            >

              <Mail size={17} />

              Contact Me

            </a>

          </div>


          {/* IDENTITY */}

          <div className="identity-row">

            <div className="identity-item">

              <Code2 size={17} />

              <span>
                SOFTWARE ENGINEERING
              </span>

            </div>


            <div className="identity-item">

              <MapPin size={17} />

              <span>
                BANGLADESH
              </span>

            </div>

          </div>

        </div>


        {/* ================================
            PROFILE CARD
        ================================= */}

        <div className="premium-profile-card">

          <div className="profile-card-header">

            <span>
              ROOM 01
            </span>

            <span>
              ABOUT
            </span>

          </div>


          <div className="profile-photo-wrapper">

            <div className="profile-ring">

              <img
                src="/mahee.png"
                alt="MD Atheful Haque Mahee"
                className="profile-photo"
              />

            </div>

          </div>


          <h3>
            MD Atheful Haque Mahee
          </h3>

          <p>
            Software Engineering Student
          </p>


          <div className="profile-card-line" />


          <div className="profile-card-bottom">

            <span>
              <GraduationCap size={15} />
              DIU
            </span>

            <span>
              🇧🇩 Bangladesh
            </span>

          </div>

        </div>

      </div>


      {/* ================================
          STATS
      ================================= */}

      <div className="about-stats">

        {stats.map((stat, index) => (

          <div
            className="about-stat"
            key={stat.label}
          >

            <span className="stat-index">
              0{index + 1}
            </span>

            <strong>
              {stat.value}
            </strong>

            <span>
              {stat.label}
            </span>

          </div>

        ))}

      </div>


      {/* ================================
          MY JOURNEY
      ================================= */}

      <div className="journey-section">

        <div className="journey-heading">

          <div>

            <span>
              MY JOURNEY
            </span>

            <h2>
              A story still being written.
            </h2>

          </div>

          <p>
            Every stage taught me something
            different.
          </p>

        </div>


        <div className="journey-line">

          {journey.map((item, index) => (

            <div
              className="journey-item"
              key={item.year}
            >

              <div className="journey-marker">

                <span>
                  {item.year}
                </span>

              </div>


              <div className="journey-content">

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.place}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================================
          CURRENT FOCUS
      ================================= */}

      <div className="focus-card">

        <div className="focus-icon">

          <Code2 size={28} />

        </div>


        <div className="focus-content">

          <span>
            CURRENTLY FOCUSED ON
          </span>

          <h2>
            Building. Learning. Improving.
          </h2>

          <p>
            I'm currently exploring modern web
            development, software engineering,
            system design and building projects
            that turn ideas into useful experiences.
          </p>

        </div>


        <div className="focus-status">

          <span className="status-dot" />

          LEARNING

        </div>

      </div>


      {/* ================================
          FOOTER
      ================================= */}

      <div className="about-footer">

        <div>

          <span>
            FIND ME ONLINE
          </span>

          <h3>
            Let's build something interesting.
          </h3>

        </div>


        <a
          href="https://github.com/AthefulHaqueMahee"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >

          <Code2 size={19} />

          GitHub

          <ArrowUpRight size={15} />

        </a>

      </div>

    </section>
  );
}

export default LivingRoom;