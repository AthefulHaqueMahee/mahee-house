import { ExternalLink } from "lucide-react";
function ProjectsRoom() {

  const projects = [
    {
      number: "01",
      title: "Food Axis",
      category: "Restaurant Management Platform",
      description:
        "A restaurant operations platform designed to organize and simplify restaurant management processes.",
      technologies: ["React", "JavaScript", "CSS"],
    },

    {
      number: "02",
      title: "Hotel Management System",
      category: "Desktop / Java Project",
      description:
        "A Java-based management system designed to handle hotel operations and management tasks.",
      technologies: ["Java", "OOP", "File Handling"],
    },

    {
      number: "03",
      title: "House Portfolio",
      category: "Interactive Portfolio",
      description:
        "An interactive portfolio designed as a virtual house where every room represents a different part of my professional journey.",
      technologies: ["React", "Vite", "Framer Motion"],
    },
  ];

  return (
       <section className="special-room projects-special">

      <p className="room-kicker">
        THE PROJECT ROOM
      </p>

      <h1>
        Things I've Built 📚
      </h1>

      <p>
        A collection of projects I've worked on while
        learning, experimenting and solving problems.
      </p>

      <div className="projects-showcase">

        {projects.map((project) => (

          <article
            className="project-showcase-card"
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <div className="technology-list">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

              <div className="project-links">

              

                <a href="#">
                  <ExternalLink size={16} />
                  Preview
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ProjectsRoom;