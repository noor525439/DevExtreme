import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import menu_icon from "../assets/images/menu_icon.png";
import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
  
      <div className="flex justify-between items-center shadow-lg px-6 py-2 border-b border-gray-300 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <img
            onClick={() => setExtended(!extended)}
            src={menu_icon}
            alt="menu"
            className="h-10 cursor-pointer"
          />
          <h1 className="font-semibold text-2xl text-gray-800 dark:text-gray-200">
            DevExtreme App
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>

    
      <div className="flex flex-1">
        <Sidebar extended={extended} />
      </div>
    </div>
  );
};

export default Navbar;
