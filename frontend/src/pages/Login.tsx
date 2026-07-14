import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0b0015] to-[#1b0033] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/20 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Admin Login
        </h1>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-black/20 border border-purple-500/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl bg-black/20 border border-purple-500/20 px-4 py-3 pr-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 font-medium"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              className="accent-purple-600 w-4 h-4"
            />
            <span>Remember Me</span>
          </label>

          <button
            type="button"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Portfolio Admin Panel
        </p>

      </div>
    </div>
  );
};

export default Login;