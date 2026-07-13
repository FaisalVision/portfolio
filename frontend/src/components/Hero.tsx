import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0b0015] to-[#1b0033] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">
          Muhammad <span className="text-purple-500">Faisal</span>
        </h1>

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
          <button className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition">
            View Projects
          </button>

          <button className="px-8 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition">
            Download CV
          </button>
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