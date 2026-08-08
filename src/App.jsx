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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Home onEnter={() => setEnteredHouse(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="interior"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Interior />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;