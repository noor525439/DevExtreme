import React, { useState } from "react";
import { Home, Folder, ChevronRight } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import componentsConfig from "./ComponentsConfig"; 

const Sidebar = ({ extended }) => {
  const [display, setDisplay] = useState(true);

  return (
    <div className="flex min-h-screen w-screen overflow-y-scroll scrollbar-hide">
      <aside
        className={`min-h-screen bg-white dark:bg-gray-800 shadow-md transition-all duration-300 
        ${extended ? "w-64" : "w-20"}`}
      >
        <nav className="flex flex-col p-4 space-y-2">

          <div className="flex items-center gap-2">
            {extended ? (
              <Link
                to="/"
                className="flex items-center gap-2 font-semibold hover:bg-gray-200 hover:w-80 dark:hover:bg-gray-700 p-2 rounded"
              >
                <Home size={24} />Home
              </Link>
            ) : (
              <Home className="my-2 mx-1.5" size={21} />
            )}
          </div>


          <div>
            {extended ? (
              <button
                onClick={() => setDisplay(!display)}
                className="flex items-center gap-2 p-2 font-semibold rounded hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
              >
                <Folder size={24} />Examples
                <ChevronRight
                  className={`ml-auto transition-transform ${
                    display ? "rotate-90" : ""
                  }`}
                  size={16}
                />
              </button>
            ) : (
              <Folder className="my-2 mx-1.5" size={21} />
            )}

            {display && extended && (
              <div>
                {componentsConfig.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-8 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>

      
      <main className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          {componentsConfig.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default Sidebar;
