import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
  FaSave,
} from "react-icons/fa";

const ContactManager = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        Contact Information
      </h2>

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaEnvelope className="text-purple-400" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Phone
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaPhone className="text-purple-400" />
              <input
                placeholder="+92..."
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Location
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaMapMarkerAlt className="text-purple-400" />
              <input
                placeholder="Karachi, Pakistan"
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              GitHub
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaGithub className="text-purple-400" />
              <input
                placeholder="GitHub URL"
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              LinkedIn
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaLinkedin className="text-purple-400" />
              <input
                placeholder="LinkedIn URL"
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Instagram
            </label>

            <div className="flex items-center bg-[#24143d] rounded-xl px-4">
              <FaInstagram className="text-purple-400" />
              <input
                placeholder="Instagram URL"
                className="w-full bg-transparent p-4 outline-none"
              />
            </div>
          </div>

        </div>

        <div>
        <label className="block mb-2 text-gray-300">
          WhatsApp
        </label>

        <div className="flex items-center bg-[#24143d] rounded-xl px-4">
          <FaWhatsapp className="text-purple-400" />

          <input
            placeholder="https://wa.me/92XXXXXXXXXX"
            className="w-full bg-transparent p-4 outline-none"
          />
        </div>
      </div>

        <button className="mt-8 flex items-center gap-3 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition">
          <FaSave />
          Save Contact
        </button>

      </div>
    </div>
  );
};

export default ContactManager;