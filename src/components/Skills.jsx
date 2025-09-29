import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from './AnimatedHeading';


function Skills({ skills }) {
  const [poppedSkill, setPoppedSkill] = useState(null);

  const handleClick = (skill) => {
    setPoppedSkill(poppedSkill === skill ? null : skill);
  };

  return (
    <motion.section
      id="skills"
      className="mb-16 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatedHeading>
        Skills
      </AnimatedHeading>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            className="bg-indigo-700 bg-opacity-70 rounded-full px-4 py-2 text-sm md:text-base font-medium text-white cursor-pointer select-none"
            onClick={() => handleClick(skill)}
            whileHover={{ scale: 1.5 }}
            animate={{ scale: poppedSkill === skill ? 1.5 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
