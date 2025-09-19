import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import headshot from "./assets/headshot.jpg"; // Put your headshot image in src/assets/

function App() {
  useEffect(() => {
    // Always dark mode - set class on mount
    document.documentElement.classList.add("dark");
  }, []);

  const projects = [
    {
      name: "Licious",
      description:
        "A website for meat & fish delivery service, includes an admin panel.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
    {
      name: "MindMate",
      description:
        "SaaS AI Bot built with Next.js, TypeScript, Stripe, Prisma ORM, MySQL.",
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
      description:
        "Login/Signup project with Google Authentication and Firebase.",
      tech: ["Firebase", "Google Auth", "React"],
      live: "#",
      github: "https://github.com/SinghYogendra7/my-backend",
    },
  ];

  const skills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Git / GitHub",
    "Node.js",
    "Express.js",
    "MySQL",
    "AWS",
    "MongoDB",
  ];

  // Scroll-to-top function
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
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
      <div className="pt-24 min-h-screen relative z-20 bg-opacity-90 text-gray-100 font-sans transition-colors duration-500 max-w-5xl mx-auto px-6">
        {/* Hero Section with animation and headshot */}
        <motion.section
          id="home"
          className="mb-32 relative z-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Headshot */}
          <motion.img
            src={headshot}
            alt="Yogendra Singh"
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-12 shadow-lg border-4 border-indigo-600"
            variants={slideLeftFade}
          />

          {/* Text Content */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading"
              variants={slideUpFade}
            >
              Hi, I&apos;m Yogendra Singh
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
              variants={slideUpFade}
            >
              Aspiring Software Developer based in Ahmedabad, India
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 text-indigo-400 mt-6"
              variants={slideUpFade}
            >
              <a
                href="mailto:cyogendrasingh@gmail.com"
                className="hover:underline"
                aria-label="Send Email"
              >
                cyogendrasingh@gmail.com
              </a>
              <a href="tel:+919694892399" className="hover:underline" aria-label="Call Phone">
                +91 9694892399
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="mb-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 font-heading">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed px-4">
            I am an Aspiring Full Stack Developer. Passionate about building efficient and scalable web applications.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center font-heading">
            Skills
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-indigo-700 bg-opacity-70 rounded-full px-4 py-2 text-sm md:text-base font-medium text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-indigo-600 text-center font-heading">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  {proj.name}
                </h3>
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
          className="mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 font-heading">
            Contact Me
          </h2>
          <p className="mb-6 text-gray-300">
            If you’d like to work together or just say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6 text-indigo-400">
            <a href="mailto:cyogendrasingh@gmail.com" className="hover:underline">
              cyogendrasingh@gmail.com
            </a>
            <a href="tel:+919694892399" className="hover:underline">
              +91 9694892399
            </a>
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
