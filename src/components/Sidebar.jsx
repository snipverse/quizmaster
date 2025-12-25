import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-44 sm:w-48 lg:w-64 bg-white border-r p-3 sm:p-4 lg:p-6 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="space-y-4">
          <NavLink
            to="/"
            onClick={() => onClose && onClose()}
            className={({ isActive }) =>
              isActive
                ? "block text-purple-700 font-semibold text-base sm:text-lg"
                : "block text-gray-600 text-base sm:text-lg"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            onClick={() => onClose && onClose()}
            className={({ isActive }) =>
              isActive
                ? "block text-purple-700 font-semibold text-base sm:text-lg"
                : "block text-gray-600 text-base sm:text-lg"
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
