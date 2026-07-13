import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0A0A0A] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 rounded-full bg-[#151515] border border-purple-500/20 hover:border-purple-500 hover:bg-purple-600/20 cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;