import React, { useState } from "react";
import profile from "../assets/images/profile.png";

const Profile = () => {
  const [text, setText] = useState(
    "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi. Sandra has 2 daughters both are whom are accomplished gymnasts."
  );

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>


      <div className="shadow-lg rounded-lg p-4 bg-white mb-6">
        <div className="flex items-center m-6  p-4 rounded-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 border border-gray-300 bg-white object-cover mr-6"
          />
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
<br/>
<br/>
  
      <div className="shadow-lg rounded-lg p-12 bg-white">
        <div className="grid grid-cols-4 gap-6">
          <div className="px-4">
            <label className="block text-gray-600">ID:</label>
            <input
              type="text"
              value="7"
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 bg-white p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600">First Name:</label>
            <input
              type="text"
              value="Sandra"
              className="w-full bg-white border-b-2 border-b-gray-950 border border-gray-300 p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600">Last Name:</label>
            <input
              type="text"
              value="Johnson"
              className="w-full bg-white border-b-2 border-b-gray-950 border border-gray-300 p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600">Prefix:</label>
            <input
              type="text"
              value="Mrs."
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 bg-white p-2"
            />
          </div>

          <div className="px-4">
            <label className="block text-gray-600">Position:</label>
            <input
              type="text"
              value="Controller"
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 bg-white p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600">Birth Date:</label>
            <input
              type="text"
              value="11/5/1974"
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 bg-white p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600">Picture:</label>
            <input
              type="text"
              value="images/employees/06.png"
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-600">Hire Date:</label>
            <input
              type="text"
              value="5/11/2005"
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 bg-white p-2"
            />
          </div>

          <div className="px-4 ">
            <label className="block text-gray-600">Notes:</label>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="w-90 h-10 border-b-2 border-b-gray-950 border border-gray-300 p-2 bg-white resize-none overflow-hidden"
            />
          </div>

          <div >
            <label className="block text-gray-600">Address:</label>
            <input
              type="text"
              value="4600 N Virginia Rb."
              className="w-full border-b-2 border-b-gray-950 border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>


      <footer className="text-sm text-gray-500 bg-gray-100 mt-10 pt-16 rounded-lg">
        <hr className="mb-2" />
        <p>@2011-2025 DevExtreme App Inc.</p>
        <p>
          All trademarks or registered trademarks are property of their
          respective owners.
        </p>
      </footer>
    </div>
  );
};

export default Profile;
