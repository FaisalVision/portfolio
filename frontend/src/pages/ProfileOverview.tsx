import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaCamera,
} from "react-icons/fa";

const ProfileOverview = () => {
  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-4xl font-bold">
            Profile Overview
          </h2>

          <p className="text-gray-400 mt-2">
            Overview of your portfolio profile.
          </p>

        </div>

      </div>

      {/* Profile Card */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <div className="flex items-center gap-8">

          <div className="w-36 h-36 rounded-full bg-[#24143d] border-2 border-purple-500/30 flex items-center justify-center">

            <FaCamera className="text-5xl text-purple-400" />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Muhammad Faisal
            </h2>

            <p className="text-purple-400 text-lg mt-2">
              Software Engineering Student
            </p>

            <div className="mt-4">

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                Available for Opportunities
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Personal Information */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-8">
          Personal Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaUser className="text-purple-400" />

              <span className="text-gray-400">
                Full Name
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              Muhammad Faisal
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaBriefcase className="text-purple-400" />

              <span className="text-gray-400">
                Profession
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              Software Engineering Student
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaEnvelope className="text-purple-400" />

              <span className="text-gray-400">
                Email
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              example@gmail.com
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaPhone className="text-purple-400" />

              <span className="text-gray-400">
                Phone
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              +92 XXX XXX XXXX
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaMapMarkerAlt className="text-purple-400" />

              <span className="text-gray-400">
                Location
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              Karachi, Pakistan
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5">

            <div className="flex items-center gap-3 mb-2">

              <FaUniversity className="text-purple-400" />

              <span className="text-gray-400">
                University
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              Bahria University Karachi
            </h4>

          </div>

          <div className="bg-[#24143d] rounded-xl p-5 md:col-span-2">

            <div className="flex items-center gap-3 mb-2">

              <FaGraduationCap className="text-purple-400" />

              <span className="text-gray-400">
                Degree
              </span>

            </div>

            <h4 className="text-lg font-semibold">
              BS Software Engineering
            </h4>

          </div>

        </div>

      </div>
            {/* Portfolio Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-400">
            08
          </h3>
          <p className="text-gray-400 mt-2">
            Projects
          </p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-400">
            15
          </h3>
          <p className="text-gray-400 mt-2">
            Skills
          </p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-400">
            06
          </h3>
          <p className="text-gray-400 mt-2">
            Certificates
          </p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-400">
            05
          </h3>
          <p className="text-gray-400 mt-2">
            Journey Entries
          </p>
        </div>

      </div>

      {/* Featured Project */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-6">
          Featured Project
        </h3>

        <div className="bg-[#24143d] rounded-xl p-6">

          <h4 className="text-2xl font-bold">
            Inventory Management System
          </h4>

          <p className="text-purple-400 mt-2">
            Python • PyQt6 • MySQL
          </p>

          <p className="text-gray-400 mt-5 leading-7">
            Professional desktop inventory management application
            with product management, sales, purchase tracking,
            authentication, reports and modern PyQt6 interface.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full">
              Desktop App
            </span>

            <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full">
              Completed
            </span>

            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full">
              Featured
            </span>

          </div>

        </div>

      </div>
            {/* About Preview */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-6">
          About Preview
        </h3>

        <p className="text-gray-300 leading-8">
          Passionate Software Engineering student at Bahria University Karachi,
          focused on building professional desktop and full-stack applications.
          I enjoy solving real-world problems with clean code, modern UI design,
          and scalable software architecture. Currently expanding my skills in
          AI, cloud technologies, and backend development.
        </p>

      </div>

      {/* Current Goals */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-6">
          Current Goals
        </h3>

        <div className="flex flex-wrap gap-4">

          <span className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-full">
            🤖 AI Engineer
          </span>

          <span className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-full">
            💻 Full Stack Developer
          </span>

          <span className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-full">
            ☁ AWS Cloud
          </span>

          <span className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-full">
            🚀 Open Source
          </span>

          <span className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-full">
            📱 Modern UI/UX
          </span>

        </div>

      </div>

      {/* Social Links */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <h3 className="text-2xl font-semibold mb-6">
          Social & Portfolio Links
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#24143d] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              GitHub
            </p>
            <h4 className="font-semibold mt-2">
              github.com/FaisalVision
            </h4>
          </div>

          <div className="bg-[#24143d] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              LinkedIn
            </p>
            <h4 className="font-semibold mt-2">
              linkedin.com/in/your-profile
            </h4>
          </div>

          <div className="bg-[#24143d] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              Portfolio Website
            </p>
            <h4 className="font-semibold mt-2">
              https://yourportfolio.com
            </h4>
          </div>

          <div className="bg-[#24143d] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              Resume
            </p>
            <h4 className="font-semibold mt-2">
              resume.pdf
            </h4>
          </div>

        </div>

      </div>
          
      {/* Last Updated */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="text-xl font-semibold">
              Portfolio Status
            </h3>

            <p className="text-gray-400 mt-2">
              All information shown here is automatically managed from
              the individual admin sections (Home, About, Skills,
              Projects, Certificates, Journey, Contact and Resume).
            </p>

          </div>

          <div className="text-right">

            <p className="text-gray-400 text-sm">
              Last Updated
            </p>

            <h4 className="text-lg font-semibold mt-2">
              Just Now
            </h4>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileOverview;