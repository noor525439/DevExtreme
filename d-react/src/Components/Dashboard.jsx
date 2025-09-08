import React, { useState } from "react";
import profile from "../assets/images/profile.webp";
import {  LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [showDropdown, setShowDropdown] = useState(false);

  const Dropdown = () => (
    <div className="absolute right-4 top-14 mt-1 w-52 bg-white dark:bg-gray-800 shadow-md rounded-md text-xl z-50 border border-gray-200 dark:border-gray-700">
      <ul>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3">
           <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer hover:border-blue-500 transition-colors"
            />
          <Link to="/Profile" className="text-xl">Zubair Khan</Link>
        </li>
        <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 border-t border-gray-200 dark:border-gray-700">
          <LogOut size={18} />
          <Link to="/SignUp">Log out</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div >

      <div className="fixed top-0  right-0 flex justify-between items-center  px-6 py-2  bg-white dark:bg-gray-800 transition-colors duration-300">
        
        <div className="flex items-center gap-4 ml-6">
                Zubair Khan
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

      
    
    </div>
  );
};

export default Navbar;
