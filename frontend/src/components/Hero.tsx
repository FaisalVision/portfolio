import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-purple-400 mb-4"
        >
          👋 Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-extrabold"
        >
          Muhammad Faisal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300"
        >
          Software Engineering Student • Future AI Engineer • Full-Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-600 transition">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;