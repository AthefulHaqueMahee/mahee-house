function SkillsRoom() {
  const skills = [
    "JavaScript",
    "React",
    "HTML & CSS",
    "Java",
    "C",
    "SQL",
    "Git & GitHub",
    "Node.js",
  ];

  return (
    <section>

      <p className="room-kicker">THE WORKSHOP</p>

      <h1>Skills 💻</h1>

      <p>
        Technologies and tools I'm learning and working with.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default SkillsRoom;