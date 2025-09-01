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
    <div className="flex-1 p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>

      <div className="flex justify-between items-center shadow-lg rounded-lg p-4 bg-white dark:bg-gray-800 mb-6">
        <div className="flex items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 object-cover rounded-lg mr-6"
          />
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="rounded-lg py-2 px-6 text-white bg-blue-500 hover:bg-blue-600"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="rounded-lg py-2 px-6 text-white bg-green-500 hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="rounded-lg py-2 px-6 text-white bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

    
      <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: "ID:", value: "7" },
            { label: "First Name:", value: "Sandra" },
            { label: "Last Name:", value: "Johnson" },
            { label: "Prefix:", value: "Mrs." },
            { label: "Position:", value: "Controller" },
            { label: "Birth Date:", value: "11/5/1974" },
            { label: "Picture:", value: "images/employees/06.png" },
            { label: "Hire Date:", value: "5/11/2005" },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-gray-600 dark:text-gray-400">{field.label}</label>
              <input
                type="text"
                defaultValue={field.value}
                disabled={!isEditing}
                className="w-full border-b border-gray-300 dark:border-gray-600 p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 disabled:opacity-70"
              />
            </div>
          ))}

        
          <div className="">
            <label className="block text-gray-600 dark:text-gray-400">Notes</label>
            <textarea
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              disabled={!isEditing}
              className="w-96 h-9 pt-2  border-b border-gray-300 dark:border-gray-600 p-2 overflow-hidden rounded resize-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 disabled:opacity-70"
            />
          </div>

          
          <div >
            <label className="block text-gray-600 dark:text-gray-400">Address:</label>
            <input
              type="text"
              defaultValue="4600 N Virginia Rb."
              disabled={!isEditing}
              className=" border-b w-96 border-gray-300 dark:border-gray-600 pt-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 disabled:opacity-70"
            />
          </div>
        </div>
      </div>

      
      <footer className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-10 pt-10 rounded-lg px-6">
        <hr className="mb-2 border-gray-300 dark:border-gray-700" />
        <p>© 2011-2025 App Inc.</p>
        <p>All trademarks or registered trademarks are property of their respective owners.</p>
      </footer>
    </div>
  );
};

export default Profile;
