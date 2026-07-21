import { motion } from "framer-motion";
import { about } from "../data/about";

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
            {about.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-purple-500/20 p-5">
              <h3 className="text-purple-400 font-semibold">
                Education
              </h3>

              <p className="text-gray-400 mt-2">
                {about.education}
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 p-5">
              <h3 className="text-purple-400 font-semibold">
                University
              </h3>

              <p className="text-gray-400 mt-2">
                {about.university}
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
          <div className="w-80 h-80 rounded-3xl overflow-hidden border border-purple-500/30 bg-[#111]">
            <img
              src={about.image}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;