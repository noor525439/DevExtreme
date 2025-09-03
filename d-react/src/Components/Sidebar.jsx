import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import componentsConfig from "./ComponentsConfig";

const Sidebar = ({ extended }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search , setSearch] = useState("");
  const navigation = useNavigate();
  const location = useLocation();


  const handleSearch = (e) =>  {
  const value = e.target.value;
   setSearch(value);

const findMenu = (items, value) => {
  for (let item of items) {
    
    if (item.name.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }

    if (item.children) {
      const found = findMenu(item.children, value);
      if (found) return found;
    }
  }
  return null;
};

   
const searchMenu = findMenu(componentsConfig, value);
if (searchMenu) {
  if (location.pathname !== searchMenu.path)
  navigation(searchMenu.path);
}
  }



  const renderIcon = (iconName, size = 24) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  return (
    <div className="flex min-h-screen w-screen  ">

      <aside
        className={`fixed left-0  h-screen bg-white overflow-y-auto dark:bg-gray-800 shadow-md transition-all duration-300
        ${extended ? "w-64" : "w-20"} `}
      >
        <nav className="flex flex-col p-4 space-y-2 mb-20">
          {componentsConfig.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <>
                  {extended ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.path ? null : item.path)
                      }
                      aria-expanded={openDropdown === item.path}
                      className="flex items-center gap-2 p-2 font-semibold rounded hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
                    >
                      {renderIcon(item.icon)} {item.name}
                      <Icons.ChevronRight
                        className={`ml-auto transition-transform ${
                          openDropdown === item.path ? "rotate-90" : ""
                        }`}
                        size={16}
                      />
                    </button>
                  ) : (
                    <div className="my-2 px-2 mx-1.5">
                      {renderIcon(item.icon, 24)}
                    </div>
                  )}

          
                  {openDropdown === item.path && extended && (
                    <div>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-8 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded ${
                    extended ? "w-full" : "justify-center"
                  }`}
                >
                  {renderIcon(item.icon, 24)}
                  {extended && item.name}
                </Link>
              )}
        
            </div>
            
          ))}
          <div className="flex justify-between gap-3 items-center">
           <input type="text" placeholder="Search..." value={search} onChange={handleSearch} className="p-2 mt-4 w-full border border-gray-300  rounded-md"
          />
            <Icons.Search   className=" text-gray-400  mt-5" size={36}/>
          </div>
          
        </nav>
      
      </aside>

  
      <main
        className={`flex-1 bg-gray-100 transition-all duration-300 overflow-y-scroll scrollbar-hide
        ${extended ? "ml-64" : "ml-20"}`}
      >
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
