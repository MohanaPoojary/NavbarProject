import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logoLight from "../assets/logo_white.png"; 
import logoDark from "../assets/logo_dark.png"; 

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Logo and title */}
      <div className="flex items-center gap-2">
        <img
      src={theme === "light" ? logoLight : logoDark}
      alt="Logo"
      className="h-8 w-8"
    />
        <span className="text-xl font-semibold">MyApp</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 list-none">
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive
                ? "font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
