import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import menu_icon from "../assets/images/menu_icon.png";
import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";
import { User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [extended, setExtended] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const Dropdown = () => (
    <div className="absolute right-4 top-14 mt-1 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md text-xl z-50 border border-gray-200 dark:border-gray-700">
      <ul>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3">
        <User size={18} />
            <Link to="/Profile">Profile</Link>
        </li>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3  border-gray-200 dark:border-gray-700">
          <LogOut size={18} />
           <Link to="/SignUp">Log out</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <div className="flex justify-between items-center shadow-lg px-6 py-2 border-b border-gray-300 bg-white dark:bg-gray-800 transition-colors duration-300 relative">
        <div className="flex items-center gap-3">
          <img
            onClick={() => setExtended(!extended)}
            src={menu_icon}
            alt="menu"
            className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
          />
          <h1 className="font-semibold text-2xl text-gray-800 dark:text-gray-200">
            DevExtreme App
          </h1>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <DarkModeToggle />
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer hover:border-blue-500 transition-colors"
            />
            {showDropdown && <Dropdown />}
          </div>
        </div>
      </div>

  
      <div className="flex flex-1">
        <Sidebar extended={extended} />
      </div>
    </div>
  );
};

export default Navbar;