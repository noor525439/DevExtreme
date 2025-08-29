import React, { useState } from "react";
import profile from "../assets/images/profile.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi. Sandra has 2 daughters both are whom are accomplished gymnasts."
  );

  
  const [tempText, setTempText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
    setTempText(text); 
  };

  const handleSave = () => {
    setIsEditing(false);
    setText(tempText); 
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempText(text); 
  };

  return (
    <div className="flex-1 p-2 bg-gray-100 dark:bg-gray-900  text-gray-900 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-3">Profile</h1>

      
      <div className="flex justify-between items-center  shadow-lg rounded-lg p-2 bg-white dark:bg-gray-800 mb-6">
        <div className="flex justify-between items-center  p-2 rounded-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 object-cover mr-6"
          />
    
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
          
        
        </div>
         {!isEditing ? (
          <button
            onClick={handleEdit}
            className="border rounded-lg py-2 px-6 text-white bg-blue-500"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="border rounded-lg py-2 px-6 text-white bg-green-500"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="border rounded-lg py-2 px-6 text-white bg-gray-500"
            >
              Cancel
            </button>
          </div>
        )}

      </div>

    
      <div className="shadow-lg rounded-lg p-10 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-4 gap-6">
          <div className="px-4">
            <label className="block text-gray-600 dark:text-gray-400">ID:</label>
            <input
              type="text"
              defaultValue="7"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">First Name:</label>
            <input
              type="text"
              defaultValue="Sandra"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                          />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-400">Last Name:</label>
            <input
              type="text"
              defaultValue="Johnson"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Prefix:</label>
            <input
              type="text"
              defaultValue="Mrs."
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div className="px-4">
            <label className="block text-gray-600 dark:text-gray-400">Position:</label>
            <input
              type="text"
              defaultValue="Controller"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Birth Date:</label>
            <input
              type="text"
              defaultValue="11/5/1974"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Picture:</label>
            <input
              type="text"
              defaultValue="images/employees/06.png"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400">Hire Date:</label>
            <input
              type="text"
              defaultValue="5/11/2005"
              disabled={!isEditing}
              className="w-full border-b border-gray-300  p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>
    <div className="flex gap-3">
            <div className="px-4 col-span-4">
            <label className="flex text-gray-600 dark:text-gray-400">Notes:</label>
            <textarea
              value={tempText}
              onChange={(event) => setTempText(event.target.value)}
              disabled={!isEditing}
              className="w-96 h-10 border-b border-gray-300  p-2 rounded resize-none overflow-hidden bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              />
            </div>
     
          <div>
            <label className="block text-gray-600 dark:text-gray-400">Address:</label>
            <input
              type="text"
              defaultValue="4600 N Virginia Rb."
              disabled={!isEditing}
              className="border-b border-gray-300 w-96 p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>
</div>
         
        </div>
      </div>

      <footer className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-10 pt-16 rounded-lg px-6">
        <hr className="mb-2 border-gray-300 dark:border-gray-700" />
        <p>©2011-2025 DevExtreme App Inc.</p>
        <p>All trademarks or registered trademarks are property of their respective owners.</p>
      </footer>
    </div>
  );
};

export default Profile;
