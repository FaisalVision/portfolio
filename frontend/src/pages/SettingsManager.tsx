import { FaLock, FaSave, FaUserShield } from "react-icons/fa";

const SettingsManager = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        Settings
      </h2>

      {/* Account Settings */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <div className="flex items-center gap-3 mb-8">
          <FaUserShield className="text-purple-400 text-2xl" />
          <h3 className="text-2xl font-semibold">
            Account Settings
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <input
            type="email"
            placeholder="Admin Email"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none"
          />

          <input
            placeholder="Username"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none"
          />

        </div>

      </div>

      {/* Password */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8 mb-8">

        <div className="flex items-center gap-3 mb-8">
          <FaLock className="text-purple-400 text-2xl" />
          <h3 className="text-2xl font-semibold">
            Change Password
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <input
            type="password"
            placeholder="Current Password"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none"
          />

        </div>

      </div>

      {/* Save */}

      <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-105 transition px-8 py-4 rounded-xl font-semibold">
        <FaSave />
        Save Settings
      </button>

    </div>
  );
};

export default SettingsManager;