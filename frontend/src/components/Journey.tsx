import { motion } from "framer-motion";
import { experience } from "../data/journey";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Journey</span>
        </h2>

        <div className="relative border-l-2 border-purple-500 ml-4">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-purple-500 border-4 border-black"></div>

              <div className="flex items-center gap-3">

                <p className="text-purple-400 font-semibold">
                  {item.year}
                </p>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === "Current"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;