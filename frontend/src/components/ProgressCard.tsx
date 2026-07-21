const ProgressCard = () => {
  return (
    <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Portfolio Completion
      </h2>

      <div className="space-y-4">

        <div>
          <div className="flex justify-between mb-2">
            <span>Profile</span>
            <span>100%</span>
          </div>

          <div className="w-full bg-[#24143d] rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full w-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Projects</span>
            <span>80%</span>
          </div>

          <div className="w-full bg-[#24143d] rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full w-4/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Skills</span>
            <span>90%</span>
          </div>

          <div className="w-full bg-[#24143d] rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full w-[90%]"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProgressCard;
