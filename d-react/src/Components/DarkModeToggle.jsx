import React from "react";
import useDarkMode from "../hooks/useDarkMode"
import { Sun , Moon} from "lucide-react";


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      
      className="  text-2xl
                 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {darkMode ? <Sun size={32}/>  :  <Moon size={32}/> }
    </button>
  );
};

export default DarkModeToggle;
