import React, { useState } from "react";
import { Home,Folder,ChevronRight} from "lucide-react";
import Main from "./Main";
import Profile from "./Profile";
import Tasks from "./Tasks";
import { Routes, Route, Link } from "react-router-dom";

const Sidebar = ({extended}) => {
  
  const [display,setDisplay] = useState(true)
  



  return (      
    
    <div className="flex  h-screen w-screen resize-none mb-2">
             <aside
  className={`min-h-screen bg-white dark:bg-gray-800 shadow-md transition-all duration-300 
  ${extended ? "w-64" : "w-20"}`}
>
  <div className="flex items-center justify-between  border-b border-gray-300 shadow-lg">
    
  </div>

  <nav className="flex flex-col p-4 space-y-2">
    <div className="flex items-center gap-2">
      {extended ? (
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold hover:bg-gray-200 hover:w-80 dark:hover:bg-gray-700 p-2 rounded"
        >
          <Home size={24} /> Home
        </Link>
      ) : (
        <Home className="my-2 mx-1.5" size={21} />
      )}
    </div>

    <div>
      {extended ? (
        <Link
          to="/"
          className="flex items-center gap-2 p-2 font-semibold rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Folder size={24} /> Examples
          <ChevronRight
            className="ml-16"
            size={16}
            onClick={() => setDisplay(!display)}
          />
        </Link>
      ) : (
        <Folder className="my-2 mx-1.5" size={21} />
      )}

      {display && extended && (
        <div>
          <Link
            to="/Profile"
            className="block px-8 py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"> Profile
          </Link>
          <Link to="/Tasks"className="block px-8 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Tasks</Link>
        </div>
      )}
    </div>
  </nav></aside>
      
          <main className="flex-1 bg-gray-100 ">
  <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Tasks" element={<Tasks/>}></Route>
  </Routes>
  
     
    
    </main>
   
    
      
     
    </div>
   
  );
};

export default Sidebar;
