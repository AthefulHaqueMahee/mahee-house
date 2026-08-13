import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./House.css";

function House({ onEnter }) {
  const [isEvening, setIsEvening] = useState(false);
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    if (entering) return;

    setEntering(true);

    // Give the cinematic animation time to play
    setTimeout(() => {
      onEnter();
    }, 1400);
  };

  return (
    <main className={`house-scene ${isEvening ? "evening" : "day"} ${entering ? "entering" : ""}`}>

      {/* =========================
          SKY
      ========================= */}
      <div className="sky" />

      {/* =========================
          STARS
      ========================= */}
      <AnimatePresence>
        {isEvening && (
          <div className="stars">
            {Array.from({ length: 35 }).map((_, index) => (
              <motion.span
                key={index}
                className="star"
                style={{
                  left: `${5 + ((index * 37) % 90)}%`,
                  top: `${5 + ((index * 23) % 48)}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0.2, 1, 0.3],
                  scale: [0.7, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + (index % 3),
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.05,
                }}
              >
                ✦
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* =========================
          SUN / MOON
      ========================= */}
      <AnimatePresence mode="wait">
        {!isEvening ? (
          <motion.div
            key="sun"
            className="sun"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: -40,
            }}
            transition={{
              duration: 0.8,
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ) : (
          <motion.div
            key="moon"
            className="moon"
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          />
        )}
      </AnimatePresence>

      {/* =========================
          CLOUDS
      ========================= */}
      <motion.div
        className="cloud cloud-one"
        animate={{
          x: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="cloud cloud-two"
        animate={{
          x: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ☁️
      </motion.div>

      {/* =========================
          TREES
      ========================= */}
      <motion.div
        className="tree tree-left"
        animate={{
          rotate: [0, 1.2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="tree-top">🌳</div>
        <div className="tree-trunk" />
      </motion.div>

      <motion.div
        className="tree tree-right"
        animate={{
          rotate: [0, -1.2, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="tree-top">🌳</div>
        <div className="tree-trunk" />
      </motion.div>

      {/* =========================
          GRASS
      ========================= */}
      <div className="grass" />

      {/* =========================
          PATH
      ========================= */}
      <div className="path" />

      {/* =========================
          HOUSE
      ========================= */}
      <motion.div
        className="main-house"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: entering ? 0.25 : 1,
          scale: entering ? 1.35 : 1,
        }}
        transition={{
          duration: entering ? 1.4 : 1,
          ease: "easeInOut",
        }}
      >

        {/* ROOF */}
        <div className="roof">
          <div className="chimney" />
        </div>

        {/* HOUSE BODY */}
        <div className="house-body">

          {/* LEFT WINDOW */}
          <div className="window">
            <div className="window-cross horizontal" />
            <div className="window-cross vertical" />
          </div>

          {/* LEFT PORCH LIGHT */}
          <div className="porch-light porch-light-left" />

          {/* DOOR */}
          <motion.div
            className={`entrance-door ${entering ? "door-entering" : ""}`}
            onClick={handleEnter}
            role="button"
            tabIndex={0}
            whileHover={
              !entering
                ? {
                    scale: 1.03,
                    y: -3,
                  }
                : {}
            }
            whileTap={
              !entering
                ? {
                    scale: 0.97,
                  }
                : {}
            }
            animate={
              entering
                ? {
                    scale: [1, 1.05, 1.15, 1.3],
                    boxShadow: [
                      "0 10px 20px rgba(0,0,0,.2)",
                      "0 0 35px rgba(255,210,120,.7)",
                      "0 0 80px rgba(255,210,120,.9)",
                      "0 0 150px rgba(255,255,255,1)",
                    ],
                  }
                : {}
            }
            transition={
              entering
                ? {
                    duration: 1.4,
                    ease: "easeInOut",
                  }
                : {}
            }
          >

            <div className="door-handle" />

            <div className="nameplate">
              <strong>MD ATHEFUL HAQUE MAHEE</strong>
              <span>Software Engineer</span>
            </div>

          </motion.div>

          {/* RIGHT PORCH LIGHT */}
          <div className="porch-light porch-light-right" />

          {/* RIGHT WINDOW */}
          <div className="window">
            <div className="window-cross horizontal" />
            <div className="window-cross vertical" />
          </div>

        </div>

        {/* STEPS */}
        <div className="steps">
          <div />
          <div />
          <div />
        </div>

      </motion.div>

      {/* =========================
          WELCOME MESSAGE
      ========================= */}
      <motion.div
        className="welcome-message"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: entering ? 0 : 1,
          y: entering ? -30 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <span>WELCOME TO MY WORLD</span>

        <h1>Every Room Tells A Story</h1>

        <p>Click the door to explore.</p>
      </motion.div>

      {/* =========================
          DAY / EVENING BUTTON
      ========================= */}
      <motion.button
        className="time-toggle"
        onClick={() => setIsEvening(!isEvening)}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          opacity: entering ? 0 : 1,
        }}
      >
        {isEvening ? "☀️ Day Mode" : "🌙 Evening Mode"}
      </motion.button>

      {/* =========================
          CINEMATIC WHITE FLASH
      ========================= */}
      <AnimatePresence>
        {entering && (
          <>
            <motion.div
              className="door-flash"
              initial={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: [0, 0.15, 0.4, 1],
                scale: [0.2, 0.6, 1.5, 4],
              }}
              transition={{
                duration: 1.4,
                ease: "easeIn",
              }}
            />

            <motion.div
              className="entering-text"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1.1, 1.2],
              }}
              transition={{
                duration: 1.3,
                ease: "easeInOut",
              }}
            >
              ENTERING MAHEE'S WORLD
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}

export default House;