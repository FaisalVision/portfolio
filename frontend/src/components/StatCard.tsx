import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) => {
  return (
    <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-400">{title}</p>

          <h2 className="text-4xl font-bold mt-3 text-white">
            {value}
          </h2>

          <p className="text-sm text-purple-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center text-3xl text-purple-400">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;