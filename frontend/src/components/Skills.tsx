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
              key={skill.name}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-[#151515] border border-purple-500/20 rounded-2xl p-6 w-60 hover:border-purple-500 hover:bg-purple-600/10 transition cursor-pointer"
            >
              <div className="text-4xl mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold">
                {skill.name}
              </h3>

              <p className="text-purple-400 mt-2">
                {skill.category}
              </p>

              <div className="mt-5">
                <div className="flex justify-between text-sm mb-2">
                  <span>Proficiency</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className="w-full bg-[#24143d] rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;