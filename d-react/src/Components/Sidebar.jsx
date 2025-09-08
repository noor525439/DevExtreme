import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import componentsConfig from "./ComponentsConfig";
import Modules from "./Modules";


const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const [extended, setExtended] = useState(true);

  const renderIcon = (iconName, size = 24) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  const filteredItems = componentsConfig.filter((item) => {
    const query = search.toLowerCase();
    if (item.children) {
      const childMatch = item.children.some((child) =>
        child.name.toLowerCase().includes(query)
      );
      return item.name.toLowerCase().includes(query) || childMatch;
    }
    return item.name.toLowerCase().includes(query);
  });

  return (
    <div className="flex min-h-screen w-screen">
      <aside
        className={`fixed h-screen left-0  bg-indigo-500  transition-all duration-300
        ${extended ? "w-64" : "w-20"}`}
      >
      
       

        <nav className="flex flex-col p-2 pt-7 space-y-2  mb-80 text-white">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.path} className="relative">
                {item.children ? (
                  <>
                    {extended ? (
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.path ? null : item.path
                          )
                        }
                        aria-expanded={openDropdown === item.path}
                        className="flex items-center gap-2 p-1 font-semibold rounded w-full text-left hover:bg-blue-950 dark:hover:bg-gray-700"
                      >
                        {renderIcon(item.icon)} {item.name}
                      </button>
                    ) : (
                      <div
                        className="my-2 px-2 mx-1.5 cursor-pointer"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.path ? null : item.path
                          )
                        }
                      >
                        {renderIcon(item.icon, 24)}
                      </div>
                    )}

                  
                    {openDropdown === item.path && (
                      <div
                        className={`absolute top-0 left-full bg-white dark:bg-gray-900 shadow-lg border rounded-md z-50 transition-all duration-300
                        ${extended ? "ml-1 w-56" : "ml-2 w-48"}`}
                      >
                    
                        <div className="flex flex-col">
                          {item.children
                            .filter((child) =>
                              child.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            )
                            .map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="px-6 py-2 hover:bg-blue-950 dark:hover:bg-gray-700 text-sm"
                              >
                                {child.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 font-semibold p-2 rounded hover:bg-blue-950 dark:hover:bg-gray-700 ${
                      extended ? "w-full" : "justify-center"
                    }`}
                  >
                    {renderIcon(item.icon, 24)}
                    {extended && item.name}
                  </Link>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm mt-2">No menu found</p>
          )}
        </nav>

    
        <div className="flex justify-between gap-2 items-center after: px-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-full border bg-gray-100 border-gray-300  rounded-md"
          />
        
        </div>
      </aside>

    
      <main
        className={`flex-1 bg-gray-100 transition-all duration-300
        ${extended ? "ml-64" : "ml-20"}`}
      >  <Modules/>
        <Routes>
          {componentsConfig.map((item) =>
            item.children ? (
              item.children.map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                />
              ))
            ) : (
              <Route key={item.path} path={item.path} element={item.element} />
            )
          )}
        </Routes>
      </main>
    </div>
  );
};

export default Sidebar;
