import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ children }) => {
  return (
    <motion.div
      className="relative inline-block cursor-pointer select-none"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.h2
        variants={{
          rest: { scale: 1, rotate: 0, color: "#4f46e5", textShadow: "none" },
          hover: {
            scale: 1.1,
            rotate: 5,
            color: "#7c3aed",
            textShadow: "0 0 8px rgba(124, 58, 237, 0.7)",
            transition: { type: "spring", stiffness: 300 },
          },
        }}
        className="text-3xl font-semibold mb-6 text-indigo-600 text-center font-heading"
      >
        {children}
      </motion.h2>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-indigo-600"
        variants={{
          rest: { width: 0 },
          hover: { width: "100%", transition: { duration: 0.3 } },
        }}
      />
    </motion.div>
  );
};

export default AnimatedHeading;
