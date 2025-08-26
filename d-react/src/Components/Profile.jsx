import React, { useState } from "react";
import profile from "../assets/images/profile.png";

const Profile = () => {
  const [text, setText] = useState(
    "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi. Sandra has 2 daughters both are whom are accomplished gymnasts."
  );

  return (
    <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 h-screen text-gray-900 dark:text-gray-200">

      <h1 className="text-3xl font-bold mb-3">Profile</h1>

    
      <div className="shadow-lg rounded-lg p-4 bg-white dark:bg-gray-800 mb-6">
        <div className="flex items-center  p-2 rounded-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 object-cover mr-6"
          />
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </div>
      </div>

  
      <div className="shadow-lg rounded-lg p-10 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-4 gap-6">
          
          <div className="px-4">
            <label className="block text-gray-600 dark:text-gray-400">ID:</label>
            <input
              type="text"
              value="7"
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">First Name:</label>
            <input
              type="text"
              value="Sandra"
              className="w-full bg-white dark:bg-gray-700 border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Last Name:</label>
            <input
              type="text"
              value="Johnson"
              className="w-full bg-white dark:bg-gray-700 border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Prefix:</label>
            <input
              type="text"
              value="Mrs."
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div className="px-4">
            <label className="block text-gray-600 dark:text-gray-400">Position:</label>
            <input
              type="text"
              value="Controller"
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Birth Date:</label>
            <input
              type="text"
              value="11/5/1974"
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Picture:</label>
            <input
              type="text"
              value="images/employees/06.png"
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Hire Date:</label>
            <input
              type="text"
              value="5/11/2005"
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div className="px-4">
            <label className="block text-gray-600 dark:text-gray-400">Notes:</label>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="w-full h-10 border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 resize-none overflow-hidden"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Address:</label>
            <input
              type="text"
              value="4600 N Virginia Rb."
              className="w-full border-b-2 border-b-gray-950 dark:border-b-gray-200 border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

        </div>
        
      </div>

  
      <footer className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-10 pt-16 rounded-lg px-6">
        <hr className="mb-2 border-gray-300 dark:border-gray-700" />
        <p> ©2011-2025 DevExtreme App Inc.</p>
        <p>All trademarks or registered trademarks are property of their respective owners.</p>
      </footer>
    </div>
  );
};

export default Profile;
