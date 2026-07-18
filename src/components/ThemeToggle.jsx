import { FaMoon } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <button
        onClick={() => setTheme("dark")}
        className={theme === "dark" ? "active" : ""}
      >
        <FaMoon />
      </button>

      <button
        onClick={() => setTheme("ocean")}
        className={theme === "ocean" ? "active" : ""}
      >
        <IoWater />
      </button>

      <button
        onClick={() => setTheme("aurora")}
        className={theme === "aurora" ? "active" : ""}
      >
        <BsStars />
      </button>
    </div>
  );
}

export default ThemeToggle;
