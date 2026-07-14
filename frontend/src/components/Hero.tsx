import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0b0015] to-[#1b0033] text-white relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-700/20 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Muhammad <span className="text-purple-500">Faisal</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8 text-lg">
          Passionate Software Engineering student focused on building modern desktop
          and web applications with clean UI, scalable architecture and real-world
          solutions.
        </p>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            1500,
            "Full Stack Developer",
            1500,
            "AI Enthusiast",
            1500,
            "Python Developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-400 mt-6 block"
        />

        <div className="mt-10 flex justify-center gap-5">
          <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
            >
              View Projects
          </a>

          <a
              href="#"
              className="px-8 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition"
            >
              Download CV
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              15+
            </h2>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              20+
            </h2>
            <p className="text-gray-400 mt-2">Skills</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              5+
            </h2>
            <p className="text-gray-400 mt-2">Certificates</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              2
            </h2>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;