import { FaImage, FaSave, FaUpload } from "react-icons/fa";

const AboutManager = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        About Section
      </h2>

      {/* About Description */}
      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-5">
          About Description
        </h3>

        <textarea
          placeholder="Write your about section..."
          className="w-full h-40 bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
        />

      </div>

      {/* Education */}
      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-6">
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            placeholder="Education (e.g. BS Software Engineering)"
            className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
          />

          <input
            placeholder="University (e.g. Bahria University)"
            className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
          />

        </div>

      </div>

      {/* About Image */}
      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-5">
          About Image
        </h3>

        <div className="w-40 h-40 rounded-2xl bg-[#24143d] flex items-center justify-center border border-purple-500/20 mb-6">
          <FaImage className="text-5xl text-purple-400" />
        </div>

        <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl">
          <FaUpload />
          Upload Image
        </button>

      </div>

      {/* Save */}
      <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-105 transition px-8 py-4 rounded-xl font-semibold">
        <FaSave />
        Save Changes
      </button>

    </div>
  );
};

export default AboutManager;