import type { ReactNode } from "react";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

const QuickActionCard = ({
  title,
  description,
  icon,
  onClick,
}: QuickActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-1 transition duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl text-purple-400 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-2">
        {description}
      </p>
    </button>
  );
};

export default QuickActionCard;