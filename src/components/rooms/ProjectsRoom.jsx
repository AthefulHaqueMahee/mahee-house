import { useState } from "react";
import {
  ExternalLink,
  X,
  Code2,
  Rocket,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import "./ProjectsRoom.css";

function ProjectsRoom() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      number: "01",
      title: "Food Axis",
      category: "SOFTWARE ENGINEERING",
      description:
        "A restaurant operations platform designed to simplify restaurant management, orders, inventory and daily business operations.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Database",
      ],
      status: "FEATURED PROJECT",

      // ADD YOUR REAL LINKS HERE
      github: "https://github.com/AthefulHaqueMahee",
      live: "",

      // ADD IMAGE PATH HERE LATER
      image: "",
    },

    {
      number: "02",
      title: "Mahee's House",
      category: "PORTFOLIO",
      description:
        "An interactive portfolio designed as a virtual house where every room represents a different part of my professional journey.",
      technologies: [
        "React",
        "Vite",
        "Framer Motion",
        "CSS",
      ],
      status: "CURRENT PROJECT",

      github: "https://github.com/AthefulHaqueMahee",
      live: "",

      image: "",
    },

    {
      number: "03",
      title: "Employee Management System",
      category: "C PROGRAMMING",
      description:
        "A file-based employee management application for storing employee information, calculating salaries and managing attendance.",
      technologies: [
        "C",
        "File Handling",
        "Data Management",
      ],
      status: "ACADEMIC PROJECT",

      github: "https://github.com/AthefulHaqueMahee",
      live: "",

      image: "",
    },

    {
      number: "04",
      title: "Hotel Management System",
      category: "JAVA PROJECT",
      description:
        "A Java-based management system designed to organize hotel rooms, customers, bookings and related operations.",
      technologies: [
        "Java",
        "OOP",
        "Database",
      ],
      status: "ACADEMIC PROJECT",

      github: "https://github.com/AthefulHaqueMahee",
      live: "",

      image: "",
    },
  ];

  return (
    <section className="projects-room">

      {/* ================================
          HEADER
      ================================= */}

      <div className="projects-header">

        <div>

          <p className="room-kicker">
            THE WORKSHOP
          </p>

          <h1>
            Projects
            <span className="projects-dot">.</span>
          </h1>

          <p className="projects-intro">
            A collection of things I've built,
            designed and experimented with
            throughout my journey.
          </p>

        </div>

        <div className="projects-counter">

          <span>
            PROJECTS
          </span>

          <strong>
            {String(projects.length).padStart(2, "0")}
          </strong>

        </div>

      </div>


      {/* ================================
          FEATURED PROJECTS
      ================================= */}

      <div className="featured-projects">

        {projects
          .filter((project) => project.number <= "02")
          .map((project) => (

            <div
              className="featured-project"
              key={project.number}
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <div className="project-number">
                {project.number}
              </div>


              <div className="featured-content">

                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.status}
                  </span>

                </div>


                <h2>
                  {project.title}
                </h2>


                <p>
                  {project.description}
                </p>


                <div className="technology-row">

                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}

                </div>


                <div className="project-open">

                  EXPLORE PROJECT

                  <ExternalLink
                    size={16}
                  />

                </div>

              </div>


              {/* PROJECT PREVIEW */}

              <div className="project-visual">

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                ) : (

                  <div className="visual-window">

                    <div className="visual-top">

                      <span />
                      <span />
                      <span />

                    </div>

                    <div className="visual-content">

                      <Code2 size={45} />

                      <span>
                        {project.number}
                      </span>

                    </div>

                  </div>

                )}

              </div>

            </div>

          ))}

      </div>


      {/* ================================
          OTHER PROJECTS
      ================================= */}

      <div className="other-projects">

        <div className="other-title">

          <div>

            <span>
              MORE WORK
            </span>

            <h2>
              Things I've built.
            </h2>

          </div>

          <Sparkles size={22} />

        </div>


        <div className="project-grid">

          {projects
            .filter(
              (project) =>
                project.number > "02"
            )
            .map((project) => (

              <div
                className="project-card"
                key={project.number}
                onClick={() =>
                  setSelectedProject(project)
                }
              >

                <div className="card-top">

                  <span className="small-number">
                    {project.number}
                  </span>

                  <Rocket size={18} />

                </div>


                <span className="card-category">
                  {project.category}
                </span>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="card-bottom">

                  <div className="mini-tags">

                    {project.technologies
                      .slice(0, 3)
                      .map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}

                  </div>

                  <span className="card-arrow">
                    →
                  </span>

                </div>

              </div>

            ))}

        </div>

      </div>


      {/* ================================
          FOOTER
      ================================= */}

      <div className="projects-footer">

        <FolderGit2 size={20} />

        <span>
          Always building. Always learning.
        </span>

      </div>


      {/* ================================
          PROJECT MODAL
      ================================= */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="project-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
            >

              <X size={20} />

            </button>


            <span className="modal-number">
              PROJECT {selectedProject.number}
            </span>


            <span className="modal-category">
              {selectedProject.category}
            </span>


            <h2>
              {selectedProject.title}
            </h2>


            <p>
              {selectedProject.description}
            </p>


            {/* TECHNOLOGIES */}

            <div className="modal-tech">

              {selectedProject.technologies.map(
                (tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                )
              )}

            </div>


            {/* LINKS */}

            <div className="modal-actions">

              {selectedProject.github && (

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-primary"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >

                  <Code2 size={17} />

                  GitHub

                </a>

              )}


              {selectedProject.live && (

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-primary"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >

                  <ExternalLink size={17} />

                  Live Demo

                </a>

              )}


              <button
                className="modal-secondary"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default ProjectsRoom;