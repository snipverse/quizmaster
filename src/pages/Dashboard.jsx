import StatsCard from "../components/StatsCard";
import InfoCard from "../components/InfoCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatsCard title="Total Questions" value="00" icon="fa-solid fa-book" />
        <StatsCard title="Active Students" value="00" icon="fa-solid fa-users" />
        <StatsCard title="Quizzes Created" value="00" icon="fa-solid fa-clipboard-list" />
        <StatsCard title="Avg Class Score" value="00%" icon="fa-solid fa-bullseye" />
      </div>

      <div className="info">
        <InfoCard title="System Status Card" icon="fa-solid fa-circle-check" />
        <InfoCard title="Quiz Engine Details" icon="fa-solid fa-triangle-exclamation" />
        <InfoCard title="Network and Device Info" icon="fa-solid fa-network-wired" />
        <InfoCard title="Performance Insight" icon="fa-solid fa-chart-simple" />
        <InfoCard title="Active Session Info" icon="fa-solid fa-clock" />
        <InfoCard title="App Version / Latest Update" icon="fa-solid fa-rotate" />
        <InfoCard title="Tech Stack Overview" icon="fa-solid fa-layer-group" />
        <InfoCard title="Backend Summary" icon="fa-solid fa-server" />
      </div>
    </div>
  );
}

export default Dashboard;
