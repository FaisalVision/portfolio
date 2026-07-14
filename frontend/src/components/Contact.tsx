import { motion } from "framer-motion";
import { contact } from "../data/contact";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#111] border border-purple-500/20 p-10"
        >

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-xl" />
              <span>{contact.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-400 text-xl" />
              <span>{contact.location}</span>
            </div>

          </div>

          <div className="flex gap-6 pt-8 text-3xl">

            <a href={contact.github} target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-purple-400 transition" />
            </a>

            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-purple-400 transition" />
            </a>

            <a href={contact.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>

            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;