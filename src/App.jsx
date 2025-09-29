import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import TypingIntro from "./components/TypingIntro";
import headshot from "./assets/headshot.jpg";
import AnimatedHeading from './components/AnimatedHeading';

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const projects = [
    {
      name: "Licious",
      description: "A website for meat & fish delivery service, includes an admin panel.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
    {
      name: "MindMate",
      description: "SaaS AI Bot built with Next.js, TypeScript, Stripe, Prisma ORM, MySQL.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "MySQL"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
    {
      name: "Realtime Tic Tac Toe",
      description: "Realtime multiplayer game with video call and chat features.",
      tech: ["React", "Socket.io", "Node.js"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
    {
      name: "LinkedIn‑Auth Project",
      description: "Login/Signup project with Google Authentication and Firebase.",
      tech: ["Firebase", "Google Auth", "React"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
  ];

  const skills = [
    "React", "HTML", "CSS", "JavaScript", "Git / GitHub",
    "Node.js", "Express.js", "MySQL", "AWS", "MongoDB",
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const slideUpFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideLeftFade = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Navbar */}
      <Navbar isDark={true} />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Container */}
      <div className="pt-24 min-h-screen relative z-20 bg-opacity-90 text-gray-100 font-sans transition-colors duration-500 max-w-5xl mx-auto px-6 sm:px-10">

        {/* Hero Section */}
        <motion.section
          id="home"
          className="mb-32 flex flex-col md:flex-row items-center justify-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Headshot */}
          <motion.img
            src={headshot}
            alt="Yogendra Singh"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-12 shadow-lg border-4 border-indigo-600"
            variants={slideLeftFade}
          />

          {/* Typing Text Content */}
          <div className="px-4 sm:px-0">
            <TypingIntro /> {/* Typing Animation Component */}

            {/* Contact & Resume links - stacked on mobile, inline on md+ */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-10 mt-6 text-indigo-400 text-base sm:text-xl font-semibold"
              variants={slideUpFade}
            >
              <motion.a
                href="mailto:cyogendrasingh@gmail.com"
                className="hover:underline cursor-pointer"
                aria-label="Send Email"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                cyogendrasingh@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919694892399"
                className="hover:underline cursor-pointer"
                aria-label="Call Phone"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                +91 9694892399
              </motion.a>

              <motion.a
                href="/Yogendra_Singh.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="mb-16 max-w-3xl mx-auto text-center px-4 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedHeading>
            About Me
          </AnimatedHeading>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            I am an Aspiring Full Stack Developer. Passionate about building efficient and scalable web applications.
          </p>
        </motion.section>

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-24 max-w-5xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedHeading>
            Projects
          </AnimatedHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">{proj.name}</h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <p className="mb-4 text-sm">
                  <strong>Tech: </strong>
                  {proj.tech.join(", ")}
                </p>
                <div className="flex space-x-6">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mb-24 text-center max-w-3xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedHeading>
            Contact Me
          </AnimatedHeading>
          <p className="mb-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            If you’d like to work together or just say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-indigo-400 text-xl sm:text-2xl font-semibold">
            <motion.a
              href="mailto:cyogendrasingh@gmail.com"
              className="hover:underline cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              cyogendrasingh@gmail.com
            </motion.a>
            <motion.a
              href="tel:+919694892399"
              className="hover:underline cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              +91 9694892399
            </motion.a>
          </div>
        </motion.section>
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-pink-500 rounded-full animate-slowSpin flex items-center justify-center shadow-lg text-white hover:bg-pink-600 transition-colors"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12l4-4 4 4" />
        </svg>
      </button>
    </>
  );
}

export default App;
