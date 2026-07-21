import { useState, useRef, useEffect } from "react";
import { FaRoad, FaAddressBook } from "react-icons/fa";
import {
  FaTachometerAlt,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaCertificate,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaChevronDown,
  FaPlus,
  FaUpload,
  FaInfoCircle,
} from "react-icons/fa";

import ProfileManager from "./ProfileOverview";
import ProjectsManager from "./ProjectsManager";
import SkillsManager from "./SkillsManager";
import CertificatesManager from "./CertificatesManager";
import ResumeManager from "./ResumeManager";
import SettingsManager from "./SettingsManager";

import StatCard from "../components/StatCard";
import QuickActionCard from "../components/QuickActionCard";
import ProfileCard from "../components/ProfileCard";
import RecentActivity from "../components/RecentActivity";
import ProgressCard from "../components/ProgressCard";

import JourneyManager from "./JourneyManager";
import ContactManager from "./ContactManager";
import AboutManager from "./AboutManager";
import HomeManager from "./HomeManager";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";

  return "Good Night";
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0616] text-white flex">

      <aside className="w-72 bg-[#140a25] border-r border-purple-500/20 p-6">

        <h1 className="text-3xl font-bold text-purple-400 mb-10">
          Faisal
          <span className="text-white">
            Vision
          </span>
        </h1>

        <nav className="space-y-2">

          <button
            onClick={() => setActivePage("dashboard")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "dashboard"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaTachometerAlt />
            Dashboard
          </button>

          <button
            onClick={() => setActivePage("home")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "home"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            🏠
            Home
          </button>

          <button
            onClick={() => setActivePage("projects")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "projects"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaProjectDiagram />
            Projects
          </button>

          <button
            onClick={() => setActivePage("skills")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "skills"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaCode />
            Skills
          </button>

          <button
            onClick={() => setActivePage("certificates")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "certificates"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaCertificate />
            Certificates
          </button>

          <button
            onClick={() => setActivePage("about")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "about"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaInfoCircle />
            About
          </button>

          <button
            onClick={() => setActivePage("resume")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
              activePage === "resume"
                ? "bg-purple-600"
                : "hover:bg-purple-600/20"
            }`}
          >
            <FaFileAlt />
            Resume
          </button>

          <button
            onClick={() => setActivePage("journey")}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition"
          >
            <FaRoad />
            Journey
          </button>

          <button
            onClick={() => setActivePage("contact")}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-purple-600/20 transition"
          >
            <FaAddressBook />
            Contact
          </button>

        </nav>

        <button className="flex items-center gap-3 mt-12 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition">
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-purple-400 text-lg mt-2">
              {getGreeting()}, Muhammad Faisal 👋
            </p>

            <p className="text-gray-400 mt-1">
              Welcome back to your portfolio dashboard.
            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Search */}

            <div className="flex items-center gap-3 bg-[#181028] border border-purple-500/20 rounded-xl px-4 py-3">

              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm placeholder:text-gray-500 w-44"
              />

            </div>

            {/* Notification */}

            <button className="w-12 h-12 rounded-xl bg-[#181028] border border-purple-500/20 hover:border-purple-500 transition flex justify-center items-center">

              <FaBell />

            </button>

             <div className="relative" ref={menuRef}>

              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 bg-[#181028] border border-purple-500/20 rounded-xl px-3 py-2 hover:border-purple-500 transition"
              >

                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold">
                  MF
                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    Muhammad Faisal
                  </h3>

                  <p className="text-xs text-gray-400">
                    Software Engineer
                  </p>

                </div>

                <FaChevronDown />

              </button>

              {showProfileMenu && (

                <div className="absolute right-0 mt-3 w-60 rounded-xl bg-[#181028] border border-purple-500/20 shadow-2xl overflow-hidden z-50">

                  <button
                    onClick={() => {
                      setActivePage("profile");
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-5 py-4 hover:bg-purple-600/20 transition"
                  >
                    👤 My Profile
                  </button>

                  <button
                    onClick={() => {
                      setActivePage("settings");
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-5 py-4 hover:bg-purple-600/20 transition"
                  >
                    ⚙ Settings
                  </button>

                  <button
                    className="w-full text-left px-5 py-4 text-red-400 hover:bg-red-500/10 transition"
                  >
                    🚪 Logout
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

        {activePage === "dashboard" && (

          <>

            {/* Stats */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              <StatCard
                title="Projects"
                value="15"
                subtitle="+2 this month"
                icon={<FaProjectDiagram />}
              />

              <StatCard
                title="Skills"
                value="20"
                subtitle="+4 Added"
                icon={<FaCode />}
              />

              <StatCard
                title="Certificates"
                value="5"
                subtitle="Latest Added"
                icon={<FaCertificate />}
              />

              <StatCard
                title="Portfolio Views"
                value="1240"
                subtitle="+18%"
                icon={<FaUser />}
              />

            </div>



            {/* Quick Actions */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <QuickActionCard
                  title="Add Project"
                  description="Create portfolio project"
                  icon={<FaPlus />}
                  onClick={() => setActivePage("projects")}
                />

                <QuickActionCard
                  title="Add Skill"
                  description="Manage your skills"
                  icon={<FaCode />}
                  onClick={() => setActivePage("skills")}
                />

                <QuickActionCard
                  title="Add Certificate"
                  description="Upload certificates"
                  icon={<FaCertificate />}
                  onClick={() => setActivePage("certificates")}
                />

                <QuickActionCard
                  title="Upload Resume"
                  description="Update Resume"
                  icon={<FaUpload />}
                  onClick={() => setActivePage("resume")}
                />

              </div>

            </div>
                        {/* Bottom Section */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

              {/* Left Side */}

              <div className="xl:col-span-2 space-y-6">

                <RecentActivity />

                <ProgressCard />

              </div>

              {/* Right Side */}

              <div>

                <ProfileCard
                  onEdit={() => setActivePage("profile")}
                />

              </div>

            </div>

          </>

        )}

        {/* Other Pages */}

        {activePage === "profile" && (
          <ProfileManager />
        )}
        {activePage === "home" && (
          <HomeManager />
        )}

        {activePage === "projects" && (
          <ProjectsManager />
        )}

        {activePage === "skills" && (
          <SkillsManager />
        )}

        {activePage === "certificates" && (
          <CertificatesManager />
        )}

        {activePage === "resume" && (
          <ResumeManager />
        )}
        {activePage === "about" && (
          <AboutManager />)
        }
        {activePage === "journey" && (
          <JourneyManager />
        )}
        {activePage === "contact" && (
          <ContactManager />
        )}
        {activePage === "settings" && (
          <SettingsManager />
        )}
      </main>

    </div>
  );
};

export default Dashboard;
