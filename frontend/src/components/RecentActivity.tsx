import {
  FaCheckCircle,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaFilePdf,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaProjectDiagram />,
    title: "Inventory System added",
    time: "2 hours ago",
  },
  {
    icon: <FaCode />,
    title: "Python Skill updated",
    time: "Yesterday",
  },
  {
    icon: <FaCertificate />,
    title: "AWS Certificate uploaded",
    time: "2 days ago",
  },
  {
    icon: <FaFilePdf />,
    title: "Resume updated",
    time: "Last week",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b border-purple-500/10 pb-4 last:border-none"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400">
              {item.icon}
            </div>

            <div className="flex-1">
              <h3>{item.title}</h3>

              <p className="text-sm text-gray-400">
                {item.time}
              </p>
            </div>

            <FaCheckCircle className="text-green-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;