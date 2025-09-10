import React, { useState } from "react";
import profile from "../assets/images/profile.webp";
import Sidebar from "./Sidebar";
import { User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import sneat from "../assets/images/sneat.svg";
import menu from "../assets/images/menu_icon.png";



const Navbar = () => {
  const [extended, setExtended] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const Dropdown = () => (
    <div className="absolute right-4 top-14 mt-1 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md text-xl z-50 border border-gray-200 dark:border-gray-700">
      <ul>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3">
          <User size={18} />
          <Link to="/Profile">Zubair Khan</Link>
        </li>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 border-t border-gray-200 dark:border-gray-700">
          <LogOut size={18} />
          <Link to="/SignUp">Log out</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center  px-6 py-2 border-b border-gray-300 bg-white dark:bg-gray-800 transition-colors duration-300">
         <div className="flex items-center justify-around gap-2 my-2">
                    <div className="flex items-center gap-2">
                     <img src={menu} alt="App Logo"
                      onClick={() => setExtended(!extended)}
                      className="h-10 border border-gray-300 rounded-md shadow-md p-2 w-10" />
                      <img src={sneat} alt="App Logo" className="h-12 w-12" />
                      <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-200">
                        ZAM APP
                      </h1>
                    </div></div>

        <div className="flex items-center gap-4 text-xl font-semibold text-gray-700 ml-6">
    Zubair Khan
          <div className="relative"> 
            <img
              src={profile}
              alt="Profile"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer hover:border-blue-500 transition-colors"
            />
            {showDropdown && <Dropdown />}
          </div>
        </div>
      </div>

      
      <div className="flex flex-1 pt-16">
        
        <Sidebar extended={extended}  />
      </div>
    </div>
  );
};

export default Navbar;