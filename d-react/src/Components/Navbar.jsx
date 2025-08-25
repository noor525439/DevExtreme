import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import menu_icon from "../assets/images/menu_icon.png";
import MainSection from "./MainSection";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [extended, setExtended] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col`}>
    
      <div className="flex justify-between items-center shadow-lg px-6 py-2  border-b border-gray-300 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <img
            onClick={() => setExtended(!extended)}
            src={menu_icon}
            alt="menu"
            className="h-10 cursor-pointer"
          />
          <h1 className="font-semibold border-none text-2xl text-gray-800 dark:text-gray-200">
            DevExtreme App
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            <span className="text-2xl">{darkMode ? "🌙" : "🌞"}</span>
          </button>
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 rounded-full border-none dark:border-gray-600"
          />
        </div>
      </div>

      <div className="flex flex-1">
        <MainSection extended={extended} setExtended={setExtended} />
      </div>
    </div>
  );
};

export default Navbar;
