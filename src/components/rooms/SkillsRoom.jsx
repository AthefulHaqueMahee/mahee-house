import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Monitor,
  Database,
  Globe,
  GitBranch,
  Cpu,
  X,
  Sparkles,
} from "lucide-react";

import "./SkillsRoom.css";

function SkillsRoom() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: "javascript",
      name: "JavaScript",
      level: 88,
      category: "LANGUAGE",
      icon: "JS",
      description:
        "Used for interactive web applications, frontend development and modern JavaScript projects.",
    },
    {
      id: "react",
      name: "React",
      level: 85,
      category: "FRONTEND",
      icon: "⚛",
      description:
        "Building modern component-based interfaces with React and the surrounding frontend ecosystem.",
    },
    {
      id: "java",
      name: "Java",
      level: 82,
      category: "PROGRAMMING",
      icon: "☕",
      description:
        "Object-oriented programming, application development and software engineering projects.",
    },
    {
      id: "c",
      name: "C",
      level: 80,
      category: "PROGRAMMING",
      icon: "C",
      description:
        "Strong foundation in procedural programming, algorithms, data structures and memory concepts.",
    },
    {
      id: "html",
      name: "HTML / CSS",
      level: 92,
      category: "WEB",
      icon: "</>",
      description:
        "Creating structured, responsive and visually polished web interfaces.",
    },
    {
      id: "sql",
      name: "SQL",
      level: 78,
      category: "DATABASE",
      icon: "DB",
      description:
        "Working with relational databases, queries, relationships and data management.",
    },
    {
      id: "git",
      name: "Git / GitHub",
      level: 84,
      category: "TOOLS",
      icon: "Git",
      description:
        "Version control, repository management and collaborative software development workflows.",
    },
    {
      id: "algorithms",
      name: "Algorithms",
      level: 86,
      category: "CS FOUNDATION",
      icon: "∑",
      description:
        "Problem solving, algorithmic thinking, searching, sorting, graphs and optimization.",
    },
  ];

  return (
    <section className="workshop-room">

      {/* =========================================
          HEADER
      ========================================= */}

      <motion.div
        className="workshop-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="room-kicker">
          THE DEVELOPER WORKSHOP
        </p>

        <h1>
          Where Ideas Become Code.
        </h1>

        <p>
          A digital workspace containing the tools,
          languages and concepts I use to build things.
        </p>
      </motion.div>


      {/* =========================================
          WORKSHOP
      ========================================= */}

      <div className="workshop-scene">

        {/* BACKGROUND GRID */}

        <div className="workshop-grid" />


        {/* =====================================
            WALL SIGN
        ===================================== */}

        <div className="workshop-sign">
          <span>
            MAHEE'S
          </span>

          <strong>
            DEV LAB
          </strong>

          <small>
            BUILD • BREAK • LEARN • REPEAT
          </small>
        </div>


        {/* =====================================
            MONITOR
        ===================================== */}

        <motion.div
          className="developer-monitor"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="monitor-top">

            <div className="window-controls">
              <span />
              <span />
              <span />
            </div>

            <span className="monitor-title">
              mahee@dev-lab — terminal
            </span>

          </div>


          <div className="monitor-screen">

            <div className="terminal-line">
              <span className="terminal-green">
                mahee@dev-lab
              </span>

              <span>
                :~$
              </span>

              <span className="terminal-command">
                whoami
              </span>
            </div>

            <div className="terminal-output">
              Software Engineering Student
            </div>


            <div className="terminal-line">
              <span className="terminal-green">
                mahee@dev-lab
              </span>

              <span>
                :~$
              </span>

              <span className="terminal-command">
                skills --list
              </span>
            </div>

            <div className="terminal-output">
              JavaScript • React • Java • C
            </div>

            <div className="terminal-output">
              HTML/CSS • SQL • Git • Algorithms
            </div>


            <div className="terminal-line">

              <span className="terminal-green">
                mahee@dev-lab
              </span>

              <span>
                :~$
              </span>

              <span className="terminal-command typing-command">
                build something amazing
              </span>

              <span className="cursor">
                █
              </span>

            </div>

          </div>


          <div className="monitor-stand" />

          <div className="monitor-base" />

        </motion.div>


        {/* =====================================
            FLOATING CODE
        ===================================== */}

        <motion.div
          className="floating-code code-one"
          animate={{
            y: [0, -10, 0],
            rotate: [-2, 1, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"{ code }"}
        </motion.div>


        <motion.div
          className="floating-code code-two"
          animate={{
            y: [0, 8, 0],
            rotate: [2, -1, 2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"<dev />"}
        </motion.div>


        {/* =====================================
            WORKSHOP DESK
        ===================================== */}

        <div className="workshop-desk">

          <div className="workshop-desk-top">

            <div className="keyboard">
              {Array.from({ length: 28 }).map(
                (_, index) => (
                  <span key={index} />
                )
              )}
            </div>

            <div className="mouse" />

            <div className="coffee">
              ☕
            </div>

          </div>

          <div className="workshop-desk-leg left" />
          <div className="workshop-desk-leg right" />

        </div>


        {/* =====================================
            TECH OBJECTS
        ===================================== */}

        <motion.div
          className="tech-object object-left"
          whileHover={{
            scale: 1.1,
            rotate: -5,
          }}
        >
          <Cpu size={27} />
          <span>
            CPU
          </span>
        </motion.div>


        <motion.div
          className="tech-object object-right"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
        >
          <Database size={27} />
          <span>
            DATABASE
          </span>
        </motion.div>


        {/* =====================================
            SIDE PANELS
        ===================================== */}

        <div className="workshop-panel panel-left">

          <div className="panel-title">
            <Terminal size={15} />
            TERMINAL
          </div>

          <div className="panel-content">

            <span>
              $ npm run build
            </span>

            <span className="success">
              ✓ compiled successfully
            </span>

            <span>
              $ git status
            </span>

            <span className="success">
              ✓ working tree clean
            </span>

          </div>

        </div>


        <div className="workshop-panel panel-right">

          <div className="panel-title">
            <Monitor size={15} />
            SYSTEM
          </div>

          <div className="system-stat">
            <span>
              PROJECTS
            </span>

            <strong>
              ACTIVE
            </strong>
          </div>

          <div className="system-stat">
            <span>
              LEARNING
            </span>

            <strong>
              24 / 7
            </strong>
          </div>

          <div className="system-stat">
            <span>
              STATUS
            </span>

            <strong className="online">
              ONLINE
            </strong>
          </div>

        </div>


        {/* =====================================
            FLOOR
        ===================================== */}

        <div className="workshop-floor" />


        {/* =====================================
            HINT
        ===================================== */}

        <motion.div
          className="workshop-hint"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          <Sparkles size={14} />
          Click a skill below to inspect it
        </motion.div>

      </div>


      {/* =========================================
          SKILL CARDS
      ========================================= */}

      <div className="skills-console">

        <div className="skills-console-header">

          <div>
            <span>
              SKILL DATABASE
            </span>

            <h2>
              Technical Arsenal
            </h2>
          </div>

          <div className="skills-status">
            <span className="status-dot" />
            SYSTEM ONLINE
          </div>

        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.button
              key={skill.id}
              className="skill-card"
              onClick={() => setSelectedSkill(skill)}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-information">

                <div className="skill-name-row">

                  <strong>
                    {skill.name}
                  </strong>

                  <span>
                    {skill.level}%
                  </span>

                </div>

                <div className="skill-category">
                  {skill.category}
                </div>

                <div className="skill-progress">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.05,
                    }}
                  />

                </div>

              </div>

              <span className="skill-arrow">
                →
              </span>

            </motion.button>

          ))}

        </div>

      </div>


      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>

        {selectedSkill && (

          <motion.div
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >

            <motion.div
              className="skill-modal"
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

              <button
                className="skill-modal-close"
                onClick={() =>
                  setSelectedSkill(null)
                }
              >
                <X size={19} />
              </button>

              <div className="skill-modal-icon">
                {selectedSkill.icon}
              </div>

              <span className="skill-modal-category">
                {selectedSkill.category}
              </span>

              <h2>
                {selectedSkill.name}
              </h2>

              <div className="skill-modal-level">

                <div className="level-number">
                  {selectedSkill.level}%
                </div>

                <div className="level-bar">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        `${selectedSkill.level}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />

                </div>

              </div>

              <p>
                {selectedSkill.description}
              </p>

              <button
                className="skill-modal-button"
                onClick={() =>
                  setSelectedSkill(null)
                }
              >
                RETURN TO WORKSHOP →
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default SkillsRoom;