import { motion } from "framer-motion";
import "./House.css";

function House({ onEnter }) {
  return (
    <main className="house-scene">

      {/* Sky */}
      <div className="sky" />

      {/* Sun */}
      <motion.div
        className="sun"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Clouds */}
      <motion.div
        className="cloud cloud-one"
        animate={{ x: [0, 35, 0] }}
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
        animate={{ x: [0, -30, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ☁️
      </motion.div>

      {/* Trees */}
      <div className="tree tree-left">
        <div className="tree-top">🌳</div>
        <div className="tree-trunk" />
      </div>

      <div className="tree tree-right">
        <div className="tree-top">🌳</div>
        <div className="tree-trunk" />
      </div>

      {/* Grass */}
      <div className="grass" />

      {/* Path */}
      <div className="path" />

      {/* House */}
      <motion.div
        className="main-house"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Roof */}
        <div className="roof">
          <div className="chimney" />
        </div>

        {/* House body */}
        <div className="house-body">

          {/* Left window */}
          <div className="window">
            <div className="window-cross horizontal" />
            <div className="window-cross vertical" />
          </div>

          {/* Entrance */}
          <motion.div
            className="entrance-door"
            onClick={onEnter}
            role="button"
            tabIndex={0}
            whileHover={{
              scale: 1.03,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >

            <div className="door-handle" />

            <div className="nameplate">
              <strong>MD ATHEFUL HAQUE MAHEE</strong>
              <span>Software Engineer</span>
            </div>

          </motion.div>

          {/* Right window */}
          <div className="window">
            <div className="window-cross horizontal" />
            <div className="window-cross vertical" />
          </div>

        </div>

        {/* Steps */}
        <div className="steps">
          <div />
          <div />
          <div />
        </div>

      </motion.div>

      {/* Welcome message */}
      <motion.div
        className="welcome-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>WELCOME TO MY WORLD</span>
        <h1>Every Room Tells A Story</h1>
        <p>Click the door to explore.</p>
      </motion.div>

    </main>
  );
}

export default House;