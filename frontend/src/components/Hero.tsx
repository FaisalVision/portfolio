import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

import { hero } from "../data/hero";
import { contact } from "../data/contact";

// TypeScript interfaces for safety


const Hero = () => {
  const [homeData, setHomeData] = useState({
    hero_name: "",
    profession: "",
    short_description: "",
    profile_image: "",
    cv_file: "",
    cv_button_text: "",
    contact_button_text: "",
    github_url: "",
    linkedin_url: "",
    instagram_url: "",
    facebook_url: "",
    projects_count: "",
    skills_count: "",
    certificates_count: "",
    experience_count: "",
    available_for_work: true,
    badge_text: "",
  });

  const [typingTexts, setTypingTexts] = useState<string[]>([]);

  const imageUrl = homeData.profile_image
    ? `http://127.0.0.1:8000/${homeData.profile_image}`
    : hero.image;

  useEffect(() => {
    loadHomeData();
    loadTypingTexts();
  }, []);

  const loadHomeData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/home");
      setHomeData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadTypingTexts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/home/typing-texts");
      const roles = res.data.data.map((item: any) => item.text);
      setTypingTexts(roles);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07010d] text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7e22ce22,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea22,transparent_35%)] pointer-events-none"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-20">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 mb-8">
              👋 Welcome To My Portfolio
            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              {homeData.hero_name}
            </h1>

            <p className="mt-6 text-2xl font-semibold text-gray-300">
              {homeData.profession}
            </p>

            <TypeAnimation
              key={typingTexts.join(",")}
              sequence={
                typingTexts.length > 0
                  ? typingTexts.flatMap((text) => [text, 2000])
                  : ["Loading...", 2000]
              }
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-fuchsia-400 text-2xl mt-5 font-bold"
            />

            <p className="mt-8 text-gray-300 leading-9 text-lg max-w-xl">
              {homeData.short_description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition flex items-center gap-3 min-w-[180px] justify-center"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition flex items-center gap-3 min-w-[180px] justify-center"
              >
                <FaEnvelope />
                {homeData.contact_button_text || "Hire Me"}
              </a>

              <button
                onClick={() => {
                  if (!homeData.cv_file) {
                    toast.error("Resume is not available.");
                    return;
                  }

                  toast.success("Opening Resume...");

                  window.open(
                    `http://127.0.0.1:8000/${homeData.cv_file}`,
                    "_blank"
                  );
                }}
                className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition flex items-center gap-3 min-w-[180px] justify-center"
              >
                <FaDownload />
                {homeData.cv_button_text || "Download CV"}
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center mt-10">
            <div className="absolute w-80 h-80 rounded-full bg-purple-600/30 blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-[#221136] to-[#12051d] border border-purple-500/30 rounded-[30px] p-4 shadow-2xl w-[360px]">
              <img
                src={imageUrl}
                alt="Muhammad Faisal"
                className="w-full h-[420px] rounded-2xl object-cover object-center"
                draggable={false}
              />
              <div className="absolute top-5 left-5 bg-green-500 text-white px-4 py-2 rounded-full text-sm shadow-lg">
                {homeData.available_for_work
                  ? "🟢 Available for Work"
                  : "🔴 Not Available"}
              </div>
            </div>

            {/* Projects Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-[-35px] top-20 bg-[#181028] border border-purple-500/20 rounded-2xl px-6 py-4 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-purple-400">
                {homeData.projects_count}
              </h3>
              <p className="text-gray-400">Projects</p>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute right-[-35px] bottom-24 bg-[#181028] border border-purple-500/20 rounded-2xl px-6 py-4 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-purple-400">
                {homeData.skills_count}
              </h3>
              <p className="text-gray-400">Skills</p>
            </motion.div>

            {/* AI Badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-4 top-4 bg-[#181028] border border-purple-500/20 rounded-xl px-4 py-2 shadow-lg"
            >
              ⭐ {homeData.badge_text}
            </motion.div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-extrabold text-purple-400">
              {homeData.projects_count}
            </h2>
            <p className="text-gray-300 mt-3 text-lg">Projects</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-extrabold text-purple-400">
              {homeData.skills_count}
            </h2>
            <p className="text-gray-300 mt-3 text-lg">Skills</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-extrabold text-purple-400">
              {homeData.certificates_count}
            </h2>
            <p className="text-gray-300 mt-3 text-lg">Certificates</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-extrabold text-purple-400">
              {homeData.experience_count}
            </h2>
            <p className="text-gray-300 mt-3 text-lg">Years Learning</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;