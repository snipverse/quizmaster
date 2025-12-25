import { useState } from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import InfoCard from "../components/InfoCard";

function Dashboard() {
  const [stats, setStats] = useState([
    { id: 1, title: "Total Questions", value: 120 },
    { id: 2, title: "Active Students", value: 45 },
    { id: 3, title: "Quizzes Created", value: 8 },
    { id: 4, title: "Avg Class Score", value: "78%" },
  ]);

  const sections = [
    { id: 1, title: "System Status Card", status: "ok" },
    { id: 2, title: "Quiz Engine Details", status: "warning" },
    { id: 3, title: "Network and Device Info", status: "ok" },
    { id: 4, title: "Performance Insight", status: "ok" },
    { id: 5, title: "Active Session Info", status: "ok" },
    { id: 6, title: "App Version / Latest Update", status: "warning" },
    { id: 7, title: "Tech Stack Overview", status: "ok" },
    { id: 8, title: "Backend Summary", status: "ok" },
  ];

  return (
    <div>
      <Navbar />

      <button
        onClick={() =>
          setStats(prev =>
            prev.map(item =>
              item.id === 2
                ? { ...item, value: item.value + 1 }
                : item
            )
          )
        }
        className="mb-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Simulate Student Join
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(item => (
          <StatsCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map(section => (
          <InfoCard
            key={section.id}
            title={section.title}
            status={section.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
