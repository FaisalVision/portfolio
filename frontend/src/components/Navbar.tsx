import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.h1
            whileHover={{ scale: 1.08 }}
            className="text-2xl font-bold text-purple-400 cursor-pointer"
          >
            Faisal<span className="text-white">Vision</span>
        </motion.h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>

            <li><a href="#about" className="hover:text-purple-400">About</a></li>

            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>

            <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>

            <li><a href="#experience" className="hover:text-purple-400">Journey</a></li>

            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            
      </ul>
      <Link
          to="/admin/login"
          className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
        >
          Admin Login
        </Link>

        <div className="flex gap-4 text-xl">
          <motion.div
            whileHover={{ scale: 1.4, rotate: 15 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-block" }}
          >
            <FaGithub size={28} className="cursor-pointer hover:text-purple-400" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.4, rotate: -15 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-block" }}
          >
            <FaLinkedin size={28} className="cursor-pointer hover:text-purple-400" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;