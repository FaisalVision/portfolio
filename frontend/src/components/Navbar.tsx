import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-400">
          FaisalVision
        </h1>

        <ul className="flex gap-8 text-white">
          <li className="hover:text-purple-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition">
            Projects
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;