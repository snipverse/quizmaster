import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6">
      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block text-purple-700 font-semibold"
              : "block text-gray-600"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "block text-purple-700 font-semibold"
              : "block text-gray-600"
          }
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
