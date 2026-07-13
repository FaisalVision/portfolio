import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-400">
          Faisal<span className="text-white">Vision</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">Skills</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-4 text-xl">
          <FaGithub className="cursor-pointer hover:text-purple-400" />
          <FaLinkedin className="cursor-pointer hover:text-purple-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;