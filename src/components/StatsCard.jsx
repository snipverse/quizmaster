function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">
        <i className={icon}></i>
      </div>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default StatsCard;
