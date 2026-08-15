import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      type: "RESTAURANT MANAGEMENT PLATFORM",
      status: "IN DEVELOPMENT",
      description:
        "A restaurant operations platform designed to simplify restaurant management, orders, inventory and day-to-day business operations.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
      progress: 82,
      github: "#",
      demo: "#",
      color: "orange",
    },

    {
      number: "02",
      title: "Mahee's House",
      type: "INTERACTIVE PORTFOLIO",
      status: "ACTIVE",
      description:
        "An interactive portfolio designed as a virtual house where every room represents a different part of my professional and personal journey.",
      technologies: [
        "React",
        "Framer Motion",
        "JavaScript",
        "CSS",
      ],
      progress: 95,
      github: "#",
      demo: "#",
      color: "cyan",
    },

    {
      number: "03",
      title: "Hotel Management System",
      type: "JAVA APPLICATION",
      status: "COMPLETED",
      description:
        "A Java-based hotel management application designed to handle rooms, customers, reservations and hotel operations.",
      technologies: [
        "Java",
        "OOP",
        "File Handling",
      ],
      progress: 100,
      github: "#",
      demo: "#",
      color: "purple",
    },

    {
      number: "04",
      title: "Employee Management System",
      type: "C APPLICATION",
      status: "COMPLETED",
      description:
        "A file-based employee management application supporting employee records, attendance and salary-related operations.",
      technologies: [
        "C",
        "File Handling",
        "Data Structures",
      ],
      progress: 100,
      github: "#",
      demo: "#",
      color: "green",
    },
  ];

  return (
    <section className="projects-room">

      {/* =====================================
          HEADER
      ===================================== */}

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <p className="room-kicker">
          THE PROJECT LAB
        </p>

        <h1>
          Things I've Built.
        </h1>

        <p>
          A collection of experiments, academic projects
          and software ideas brought to life through code.
        </p>

      </motion.div>


      {/* =====================================
          PROJECT LAB
      ===================================== */}

      <div className="project-lab">

        <div className="lab-glow glow-one" />
        <div className="lab-glow glow-two" />

        {/* LAB HEADER */}

        <div className="lab-header">

          <div className="lab-title">

            <div className="lab-icon">
              <FolderGit2 size={20} />
            </div>

            <div>
              <span>
                PROJECT DATABASE
              </span>

              <h2>
                MAHEE'S PROJECT LAB
              </h2>
            </div>

          </div>


          <div className="lab-status">

            <span className="live-dot" />

            SYSTEM ONLINE

          </div>

        </div>


        {/* =================================
            PROJECT CARDS
        ================================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.button
              key={project.number}
              className={`project-card ${project.color}`}
              onClick={() =>
                setSelectedProject(project)
              }

              initial={{
                opacity: 0,
                y: 25,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
                scale: 1.015,
              }}
            >

              {/* CARD TOP */}

              <div className="project-card-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>

              </div>


              {/* PROJECT ICON */}

              <div className="project-visual">

                <motion.div
                  className="project-code-icon"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                >
                  <Code2 size={30} />
                </motion.div>

                <div className="project-lines">

                  <span />
                  <span />
                  <span />

                </div>

              </div>


              {/* INFORMATION */}

              <div className="project-information">

                <span className="project-type">
                  {project.type}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>


              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies
                  .slice(0, 3)
                  .map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                {project.technologies.length > 3 && (
                  <span>
                    +{project.technologies.length - 3}
                  </span>
                )}

              </div>


              {/* PROGRESS */}

              <div className="project-progress">

                <div className="progress-label">

                  <span>
                    DEVELOPMENT
                  </span>

                  <strong>
                    {project.progress}%
                  </strong>

                </div>

                <div className="progress-track">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${project.progress}%`,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                    }}
                  />

                </div>

              </div>


              <div className="project-explore">
                EXPLORE PROJECT →
              </div>

            </motion.button>

          ))}

        </div>


        {/* =================================
            LAB FOOTER
        ================================= */}

        <div className="lab-footer">

          <Sparkles size={15} />

          <span>
            SELECT A PROJECT TO ENTER THE LAB
          </span>

          <Rocket size={15} />

        </div>

      </div>


      {/* =====================================
          PROJECT MODAL
      ===================================== */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="project-modal-overlay"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            onClick={() =>
              setSelectedProject(null)
            }
          >

            <motion.div
              className={`project-modal ${selectedProject.color}`}

              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE */}

              <button
                className="project-modal-close"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                <X size={19} />
              </button>


              {/* NUMBER */}

              <span className="modal-project-number">
                PROJECT {selectedProject.number}
              </span>


              <div className="modal-project-icon">
                <Code2 size={32} />
              </div>


              <span className="modal-project-type">
                {selectedProject.type}
              </span>


              <h2>
                {selectedProject.title}
              </h2>


              <div className="modal-status">

                <span className="live-dot" />

                {selectedProject.status}

              </div>


              <p className="modal-description">
                {selectedProject.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="modal-section">

                <span className="modal-section-title">
                  TECHNOLOGIES
                </span>

                <div className="modal-technologies">

                  {selectedProject.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* PROGRESS */}

              <div className="modal-section">

                <div className="modal-progress-header">

                  <span>
                    DEVELOPMENT PROGRESS
                  </span>

                  <strong>
                    {selectedProject.progress}%
                  </strong>

                </div>

                <div className="modal-progress">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        `${selectedProject.progress}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />

                </div>

              </div>


              {/* BUTTONS */}

              <div className="project-modal-buttons">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (
                      selectedProject.github === "#"
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Code2 size={17} />
GitHub
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (
                      selectedProject.demo === "#"
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>

              </div>


              <button
                className="return-project-button"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                ← RETURN TO PROJECT LAB
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default ProjectsRoom;