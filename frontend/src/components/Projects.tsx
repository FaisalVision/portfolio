import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";;
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl border border-purple-500/20 bg-[#111] overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.20)] transition-all duration-300"
            >
              <div className="absolute top-5 right-5 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 z-10">
                  <FaStar />
                  Featured
              </div>
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="flex gap-3 mt-6 mb-5 ml-6">
                <span className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm">
                  💻 Desktop App
                </span>
                <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm">
                  ✓ Completed
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition mt-0">
                  {project.title}
                </h3>
                {project.year && (
                  <p className="text-purple-400 mt-2 font-semibold">
                    📅 {project.year}
                  </p>
                )}

                <p className="text-gray-400 mt-4 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                       className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/20 text-purple-200 hover:bg-purple-600 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Features */}

                {project.features && (
                  <div className="mt-6">

                    <h4 className="text-lg font-semibold mb-3">
                      Key Features
                    </h4>

                    <ul className="space-y-2 text-gray-400">

                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <span className="text-purple-400">
                            ✓
                          </span>

                          {feature}

                        </li>
                      ))}

                    </ul>

                  </div>
                )}

                <div className="flex gap-4 mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;