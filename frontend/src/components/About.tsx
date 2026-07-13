import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0A0A0A] text-white flex items-center py-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-8">
            I'm Muhammad Faisal, a Software Engineering student with a strong
            interest in Full Stack Development and Artificial Intelligence.
            I enjoy building professional software that solves real-world
            problems while continuously improving my development skills.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-purple-500/20 p-5">
              <h3 className="text-purple-400 font-semibold">
                Education
              </h3>

              <p className="text-gray-400 mt-2">
                BS Software Engineering
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 p-5">
              <h3 className="text-purple-400 font-semibold">
                University
              </h3>

              <p className="text-gray-400 mt-2">
                Bahria University
              </p>
            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-purple-600/30 to-black border border-purple-500/30 flex items-center justify-center">

            <span className="text-8xl">👨‍💻</span>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;