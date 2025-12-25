import { useState } from "react";
import { useUser } from "../hooks/useUser";

function Header() {
  const { user } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <header className="bg-purple-700 text-white px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">QuizMaster</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <span className="text-sm sm:text-base">Welcome, {user.name}</span>
            <button
              onClick={() => setShowLogout(true)}
              className="bg-white text-purple-700 px-4 py-2 rounded font-medium hover:bg-gray-100 transition text-sm sm:text-base"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {showLogout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <p className="mb-4 text-gray-700">
              Are you sure you want to log out, <b>{user.name}</b>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                onClick={() => alert("Logged out")}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
