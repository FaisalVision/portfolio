import { FaUser, FaGraduationCap, FaCircle, FaEdit } from "react-icons/fa";

interface ProfileCardProps {
  onEdit: () => void;
}

const ProfileCard = ({ onEdit }: ProfileCardProps) => {
  return (
    <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-5xl">
          <FaUser />
        </div>

        <h2 className="text-2xl font-bold mt-5">
          Muhammad Faisal
        </h2>

        <p className="text-purple-400">
          Software Engineer
        </p>

        <div className="flex items-center gap-2 mt-4 text-gray-400">
          <FaGraduationCap />
          Bahria University
        </div>

        <div className="flex items-center gap-2 mt-3">
          <FaCircle className="text-green-500 text-xs" />
          <span className="text-green-400">
            Online
          </span>
        </div>

        <button
          onClick={onEdit}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-500 transition rounded-xl py-3 flex justify-center items-center gap-2"
        >
          <FaEdit />
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default ProfileCard;