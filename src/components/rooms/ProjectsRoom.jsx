function ProjectsRoom() {
  const projects = [
    {
      title: "Food Axis",
      description:
        "A restaurant operations and management platform.",
    },
    {
      title: "Hotel Management System",
      description:
        "A Java-based hotel management project.",
    },
    {
      title: "Portfolio House",
      description:
        "This interactive portfolio website.",
    },
  ];

  return (
    <section>

      <p className="room-kicker">THE LIBRARY</p>

      <h1>Projects 📚</h1>

      <div className="project-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.title}>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default ProjectsRoom;