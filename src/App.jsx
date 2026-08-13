import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Interior from "./pages/Interior";

function App() {
  const [enteredHouse, setEnteredHouse] = useState(false);

  return (
    <AnimatePresence mode="wait">

      {!enteredHouse ? (

        <motion.div
          key="home"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Home
            onEnter={() => {
              setEnteredHouse(true);
            }}
          />
        </motion.div>

      ) : (

        <motion.div
          key="interior"
          initial={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Interior
            onBack={() => {
              setEnteredHouse(false);
            }}
          />
        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default App;