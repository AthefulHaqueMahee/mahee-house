function SkillsRoom() {

  const skills = [
    {
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      name: "React",
      level: "Learning",
    },
    {
      name: "HTML & CSS",
      level: "Strong",
    },
    {
      name: "Java",
      level: "Intermediate",
    },
    {
      name: "C",
      level: "Intermediate",
    },
    {
      name: "SQL",
      level: "Intermediate",
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
    },
    {
      name: "Node.js",
      level: "Learning",
    },
  ];

  return (
    <section>

      <p className="room-kicker">THE WORKSHOP</p>

      <h1>Skills 💻</h1>

      <p>
        The tools and technologies that I use,
        practice and continue to explore.
      </p>

      <div className="skill-list">

        {skills.map((skill) => (
          <div
            className="skill-item"
            key={skill.name}
          >

            <div className="skill-top">

              <strong>
                {skill.name}
              </strong>

              <span>
                {skill.level}
              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width:
                    skill.level === "Strong"
                      ? "90%"
                      : skill.level === "Intermediate"
                      ? "70%"
                      : "45%",
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SkillsRoom;