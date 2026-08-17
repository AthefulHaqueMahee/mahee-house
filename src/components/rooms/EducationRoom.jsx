import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
  X,
  Sparkles,
} from "lucide-react";

import "./EducationRoom.css";

function EducationRoom() {
  const [selected, setSelected] = useState(null);

  const education = [
    {
      id: "bsc",
      number: "01",
      period: "CURRENT",
      type: "BACHELOR'S DEGREE",
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      year: "Present",
      icon: <GraduationCap size={22} />,
      description:
        "Currently pursuing a Bachelor of Science in Software Engineering, building a strong foundation in programming, software engineering, algorithms, databases, web development and computer science.",
      details: [
        "Software Engineering",
        "Programming",
        "Algorithms",
        "Databases",
        "Web Development",
      ],
    },

    {
      id: "hsc",
      number: "02",
      period: "2022",
      type: "HIGHER SECONDARY",
      title: "Higher Secondary Certificate",
      institution: "Notre Dame College, Dhaka",
      year: "2022",
      icon: <Award size={22} />,
      description:
        "Completed Higher Secondary Certificate from Notre Dame College, Dhaka with outstanding academic performance under the Dhaka Education Board.",
      details: [
        "GPA 5.00",
        "Golden GPA",
        "Dhaka Board",
        "Completed 2022",
      ],
    },

    {
      id: "ssc",
      number: "03",
      period: "2020",
      type: "SECONDARY",
      title: "Secondary School Certificate",
      institution:
        "St. Gregory's High School & College, Dhaka",
      year: "2020",
      icon: <BookOpen size={22} />,
      description:
        "Completed Secondary School Certificate from St. Gregory's High School & College with GPA 5.00 under the Dhaka Education Board.",
      details: [
        "GPA 5.00",
        "Dhaka Board",
        "Completed 2020",
      ],
    },
  ];

  return (
    <section className="study-room">

      {/* =========================================
          HEADER
      ========================================= */}

      <motion.div
        className="study-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <p className="room-kicker">
          THE STUDY
        </p>

        <h1>
          My Academic Journey
        </h1>

        <p>
          Every chapter, every examination and every
          lesson has shaped the engineer I am becoming.
        </p>

      </motion.div>


      {/* =========================================
          STUDY ROOM
      ========================================= */}

      <div className="study-scene">


        {/* WALL DECOR */}

        <div className="study-wall-title">
          <span>
            KNOWLEDGE
          </span>

          <strong>
            NEVER STOPS
          </strong>
        </div>


        {/* =====================================
            DEGREE FRAME
        ===================================== */}

        <motion.button
          className="degree-frame"
          onClick={() => setSelected(education[0])}
          whileHover={{
            scale: 1.04,
            rotate: -1,
          }}
        >

          <div className="degree-inner">

            <GraduationCap size={35} />

            <span>
              BACHELOR OF SCIENCE
            </span>

            <strong>
              SOFTWARE
              <br />
              ENGINEERING
            </strong>

            <small>
              DAFFODIL INTERNATIONAL UNIVERSITY
            </small>

          </div>

          <div className="degree-light" />

        </motion.button>


        {/* =====================================
            BOOKSHELF
        ===================================== */}

        <div className="study-bookshelf">

          <div className="study-shelf shelf-one">
            <span>📘</span>
            <span>📕</span>
            <span>📗</span>
            <span>📙</span>
            <span>📓</span>
          </div>

          <div className="study-shelf shelf-two">
            <span>📚</span>
            <span>📘</span>
            <span>📕</span>
            <span>📗</span>
          </div>

          <div className="study-shelf shelf-three">
            <span>💻</span>
            <span>📖</span>
            <span>📓</span>
          </div>

          <div className="bookshelf-top">
            <span>
              MY KNOWLEDGE
            </span>
          </div>

        </div>


        {/* =====================================
            DESK
        ===================================== */}

        <motion.div
          className="study-desk"
          whileHover={{
            y: -3,
          }}
        >

          <div className="desk-top">

            <div className="desk-laptop">

              <div className="laptop-screen">

                <div className="code-line">
                  &lt;education /&gt;
                </div>

                <div className="code-line">
                  GPA = 5.00
                </div>

                <div className="code-line">
                  learning = true
                </div>

              </div>

              <div className="laptop-base" />

            </div>

            <div className="desk-book">
              📖
            </div>

            <div className="desk-cup">
              ☕
            </div>

          </div>

          <div className="desk-leg left" />
          <div className="desk-leg right" />

        </motion.div>


        {/* =====================================
            DESK LAMP
        ===================================== */}

        <div className="study-lamp">

          <div className="study-lamp-shade" />

          <div className="study-lamp-light" />

          <div className="study-lamp-arm" />

          <div className="study-lamp-base" />

        </div>


        {/* =====================================
            CHAIR
        ===================================== */}

        <div className="study-chair">

          <div className="chair-back" />

          <div className="chair-seat" />

          <div className="chair-leg left" />
          <div className="chair-leg right" />

        </div>


        {/* =====================================
            TIMELINE
        ===================================== */}

        <div className="academic-timeline">

          {education.map((item, index) => (

            <motion.button
              key={item.id}
              className={`timeline-node node-${index + 1}`}
              onClick={() => setSelected(item)}
              whileHover={{
                scale: 1.12,
              }}
            >

              <div className="timeline-dot">
                {item.number}
              </div>

              <span>
                {item.period}
              </span>

            </motion.button>

          ))}

          <div className="timeline-line" />

        </div>


        {/* =====================================
            FLOOR
        ===================================== */}

        <div className="study-floor">

          <div className="study-rug" />

        </div>


        {/* =====================================
            INTERACTION MESSAGE
        ===================================== */}

        <motion.div
          className="study-hint"
          animate={{
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >

          <Sparkles size={15} />

          Click the academic objects to explore

        </motion.div>

      </div>


      {/* =========================================
          EDUCATION CARDS
      ========================================= */}

      <div className="education-mini-cards">

        {education.map((item) => (

          <motion.button
            key={item.id}
            className="education-mini-card"
            onClick={() => setSelected(item)}
            whileHover={{
              y: -7,
            }}
          >

            <div className="mini-number">
              {item.number}
            </div>

            <div className="mini-icon">
              {item.icon}
            </div>

            <div className="mini-info">

              <span>
                {item.type}
              </span>

              <strong>
                {item.title}
              </strong>

              <small>
                {item.institution}
              </small>

            </div>

            <div className="mini-arrow">
              →
            </div>

          </motion.button>

        ))}

      </div>


      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>

        {selected && (

          <motion.div
            className="education-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              className="education-modal"
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
                className="education-modal-close"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="education-modal-icon">
                {selected.icon}
              </div>

              <span className="education-modal-type">
                {selected.type}
              </span>

              <h2>
                {selected.title}
              </h2>

              <h3>
                {selected.institution}
              </h3>

              <div className="education-modal-year">
                <CalendarDays size={16} />
                {selected.year}
              </div>

              <p>
                {selected.description}
              </p>

              <div className="education-modal-tags">

                {selected.details.map(
                  (detail) => (
                    <span key={detail}>
                      {detail}
                    </span>
                  )
                )}

              </div>

              <button
                className="education-modal-button"
                onClick={() => setSelected(null)}
              >
                Back to the Study →
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default EducationRoom;