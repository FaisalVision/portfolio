import {
  FaTachometerAlt,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaCertificate,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0b0616] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#140a25] border-r border-purple-500/20 p-6">

        <h1 className="text-3xl font-bold text-purple-400 mb-10">
          Faisal<span className="text-white">Vision</span>
        </h1>

        <nav className="space-y-2">

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-purple-600">
            <FaTachometerAlt />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaUser />
            Profile
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaProjectDiagram />
            Projects
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaCode />
            Skills
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaCertificate />
            Certificates
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaFileAlt />
            Resume
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition">
            <FaCog />
            Settings
          </button>

        </nav>

        <button className="flex items-center gap-3 mt-12 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition">
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-4xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-400 mt-2">
          Welcome back, Muhammad Faisal 👋
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition">
          <h3 className="text-gray-400">Projects</h3>
          <p className="text-4xl font-bold mt-3 text-purple-400">15</p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition">
          <h3 className="text-gray-400">Skills</h3>
          <p className="text-4xl font-bold mt-3 text-purple-400">20</p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition">
          <h3 className="text-gray-400">Certificates</h3>
          <p className="text-4xl font-bold mt-3 text-purple-400">5</p>
        </div>

        <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition">
          <h3 className="text-gray-400">Portfolio Views</h3>
          <p className="text-4xl font-bold mt-3 text-purple-400">0</p>
        </div>

      </div>
      </main>
    </div>
  );
};

export default Dashboard;