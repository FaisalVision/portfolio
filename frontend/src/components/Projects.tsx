import { motion } from "framer-motion";
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
              className="rounded-3xl border border-purple-500/20 bg-[#111] overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-purple-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-8">
                  <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition">
                    Live Demo
                  </button>

                  <button className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition">
                    GitHub
                  </button>
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