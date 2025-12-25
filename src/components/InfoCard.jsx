function InfoCard({ title, icon }) {
  return (
    <div className="info-card">
      <div className="info-left">
        <i className={icon}></i>
        <span>{title}</span>
      </div>
      <button>View</button>
    </div>
  );
}

export default InfoCard;
