import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Download,
  User,
  Code2,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";

import "./LivingRoom.css";

function LivingRoom() {
  const [selectedObject, setSelectedObject] = useState(null);

  const objects = {
    profile: {
      title: "ABOUT ME",
      icon: <User size={20} />,
      text: "I'm a Software Engineering student passionate about building useful software, exploring modern web technologies, and turning ideas into real-world digital experiences.",
    },

    education: {
      title: "MY JOURNEY",
      icon: <GraduationCap size={20} />,
      text: "Currently pursuing a B.Sc. in Software Engineering at Daffodil International University.",
    },

    skills: {
      title: "MY TOOLBOX",
      icon: <Code2 size={20} />,
      text: "Programming, web development, software engineering, databases, algorithms and modern development technologies.",
    },
  };

  return (
    <section className="living-room">

      {/* =========================================
          AMBIENT PARTICLES
      ========================================= */}

      <div className="living-particles">

        <span />
        <span />
        <span />
        <span />
        <span />

      </div>


      {/* =========================================
          HEADER
      ========================================= */}

      <motion.div
        className="living-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <p className="room-kicker">
          THE LIVING ROOM
        </p>

        <h1>
          Welcome to my world.
        </h1>

        <p className="living-subtitle">
          A little corner of the house where you can
          get to know the person behind the code.
        </p>

      </motion.div>


      {/* =========================================
          ROOM
      ========================================= */}

      <div className="living-scene">


        {/* =====================================
            WALL FRAME
        ===================================== */}

        <motion.button
          className="wall-frame"
          onClick={() =>
            setSelectedObject(objects.profile)
          }
          whileHover={{
            scale: 1.04,
            y: -5,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >

          <div className="frame-inner">

            <div className="frame-avatar">
              M
            </div>

            <strong>
              MD ATHEFUL
              <br />
              HAQUE MAHEE
            </strong>

            <span>
              SOFTWARE ENGINEER
            </span>

          </div>

          <div className="object-tooltip">
            CLICK TO INSPECT
          </div>

        </motion.button>


        {/* =====================================
            WINDOW
        ===================================== */}

        <div className="room-window">

          <div className="window-sky">

            <span className="window-sun" />

            <span className="window-cloud cloud-a">
              ☁
            </span>

            <span className="window-cloud cloud-b">
              ☁
            </span>

          </div>

          <div className="window-cross-h" />
          <div className="window-cross-v" />

        </div>


        {/* =====================================
            PLANT
        ===================================== */}

        <motion.div
          className="room-plant"
          animate={{
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="plant-leaves">
            🌿
          </div>

          <div className="plant-pot">
            🪴
          </div>

        </motion.div>


        {/* =====================================
            BOOKSHELF
        ===================================== */}

        <motion.button
          className="bookshelf"
          onClick={() =>
            setSelectedObject(objects.education)
          }
          whileHover={{
            y: -4,
          }}
        >

          <div className="shelf-top" />

          <div className="books">

            <span className="book book-one" />
            <span className="book book-two" />
            <span className="book book-three" />
            <span className="book book-four" />
            <span className="book book-five" />

          </div>

          <div className="shelf-middle" />

          <div className="books books-bottom">

            <span className="book book-six" />
            <span className="book book-seven" />
            <span className="book book-eight" />

          </div>

          <div className="shelf-bottom" />

          <span className="bookshelf-label">
            KNOWLEDGE
          </span>

        </motion.button>


        {/* =====================================
            FLOOR LAMP
        ===================================== */}

        <motion.div
          className="floor-lamp"
          animate={{
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="lamp-shade" />

          <div className="lamp-glow" />

          <div className="lamp-pole" />

          <div className="lamp-base" />

        </motion.div>


        {/* =====================================
            SOFA
        ===================================== */}

        <motion.div
          className="sofa"
          whileHover={{
            y: -3,
          }}
        >

          <div className="sofa-back">

            <div className="sofa-cushion" />
            <div className="sofa-cushion" />
            <div className="sofa-cushion" />

          </div>

          <div className="sofa-seat">

            <div className="sofa-pillow">
              ✦
            </div>

          </div>

          <div className="sofa-arm left" />
          <div className="sofa-arm right" />

          <div className="sofa-leg left" />
          <div className="sofa-leg right" />

        </motion.div>


        {/* =====================================
            COFFEE TABLE
        ===================================== */}

        <motion.div
          className="coffee-table"
          whileHover={{
            scale: 1.03,
          }}
        >

          <div className="table-top">

            <span>
              ☕
            </span>

            <span>
              💻
            </span>

          </div>

          <div className="table-leg left" />
          <div className="table-leg right" />

        </motion.div>


        {/* =====================================
            SKILLS TERMINAL
        ===================================== */}

        <motion.button
          className="mini-terminal"
          onClick={() =>
            setSelectedObject(objects.skills)
          }
          whileHover={{
            scale: 1.04,
            y: -4,
          }}
        >

          <div className="terminal-top">

            <span />
            <span />
            <span />

          </div>

          <div className="terminal-content">

            <p>
              mahee@house:~$
            </p>

            <p className="terminal-command">
              skills
            </p>

            <p className="terminal-output">
              React ✓
            </p>

            <p className="terminal-output">
              Java ✓
            </p>

            <p className="terminal-output">
              JavaScript ✓
            </p>

          </div>

        </motion.button>


        {/* =====================================
            FLOOR
        ===================================== */}

        <div className="living-floor">

          <div className="floor-rug" />

        </div>


        {/* =====================================
            INTERACTION HINT
        ===================================== */}

        <motion.div
          className="interaction-hint"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >

          <Sparkles size={15} />

          <span>
            Some objects are interactive
          </span>

        </motion.div>

      </div>


      {/* =========================================
          ACTION BUTTONS
      ========================================= */}

      <motion.div
        className="profile-buttons living-actions"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
      >

        <a
          href="/mahee_cv.pdf"
          className="cv-button"
          target="_blank"
          rel="noreferrer"
        >

          <Download size={17} />

          View My CV

        </a>


        <a
          href="mailto:your-email@example.com"
          className="contact-button"
        >

          <Mail size={17} />

          Contact Me

        </a>

      </motion.div>


      {/* =========================================
          OBJECT INSPECTION MODAL
      ========================================= */}

      <AnimatePresence>

        {selectedObject && (

          <motion.div
            className="object-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedObject(null)
            }
          >

            <motion.div
              className="object-modal"
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
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedObject(null)
                }
              >

                <X size={20} />

              </button>


              <div className="modal-icon">
                {selectedObject.icon}
              </div>


              <span className="modal-kicker">
                INSPECTED OBJECT
              </span>


              <h2>
                {selectedObject.title}
              </h2>


              <p>
                {selectedObject.text}
              </p>


              <button
                className="modal-ok"
                onClick={() =>
                  setSelectedObject(null)
                }
              >
                Continue Exploring →
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default LivingRoom;