import React from "react";
import useDarkMode from "../hooks/useDarkMode";


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      
      className="  text-2xl
                 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {darkMode ? "🌙"  :  "🌞" }
    </button>
  );
};

export default DarkModeToggle;
