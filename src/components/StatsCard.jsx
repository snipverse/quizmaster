const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
};

export default StatsCard;
