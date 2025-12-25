import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
