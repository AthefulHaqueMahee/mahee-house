function ExperienceRoom() {
  const experiences = [
    {
      number: "01",
      type: "TEACHING",
      period: "CURRENT",
      title: "Secondary-Level Teacher",
      organization: "School Teaching Experience",
      description:
        "Teaching secondary-level students while developing strong communication, presentation and classroom management skills.",
      skills: [
        "Communication",
        "Presentation",
        "Classroom Management",
      ],
    },

    {
      number: "02",
      type: "SOFTWARE",
      period: "ONGOING",
      title: "Software Engineering Projects",
      organization: "Academic & Personal Projects",
      description:
        "Developing software projects while applying programming, software design, databases and problem-solving concepts.",
      skills: [
        "Java",
        "C",
        "JavaScript",
        "SQL",
      ],
    },

    {
      number: "03",
      type: "WEB DEVELOPMENT",
      period: "ONGOING",
      title: "Frontend Development",
      organization: "Personal Learning & Projects",
      description:
        "Building modern web interfaces and interactive applications while expanding my frontend development skills.",
      skills: [
        "React",
        "HTML",
        "CSS",
        "Vite",
      ],
    },

    {
      number: "04",
      type: "ACADEMIC",
      period: "ONGOING",
      title: "Software Engineering & Projects",
      organization: "Daffodil International University",
      description:
        "Working on academic projects involving system analysis, software design, programming, documentation and presentations.",
      skills: [
        "UML",
        "System Design",
        "Git",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="experience-room">

      <p className="room-kicker">
        THE OFFICE
      </p>

      <h1>
        Experience
      </h1>

      <p className="experience-intro">
        A collection of experiences and projects that have
        shaped my technical and professional growth.
      </p>

      <div className="experience-timeline">

        {experiences.map((experience) => (
          <div
            className="experience-item"
            key={experience.number}
          >

            {/* Timeline number */}
            <div className="experience-number">
              {experience.number}
            </div>

            {/* Card */}
            <div className="experience-card">

              <div className="experience-top">

                <span className="experience-type">
                  {experience.type}
                </span>

                <span className="experience-period">
                  {experience.period}
                </span>

              </div>

              <h2>
                {experience.title}
              </h2>

              <h3>
                {experience.organization}
              </h3>

              {/* Hidden / expandable content */}
              <div className="experience-details">

                <p>
                  {experience.description}
                </p>

                <div className="experience-skills">

                  {experience.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              <div className="experience-explore">
                VIEW DETAILS →
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ExperienceRoom;