import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
