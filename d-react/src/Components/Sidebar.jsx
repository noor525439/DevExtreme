import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import componentsConfig from "./ComponentsConfig";
import Dashboard from "./Dashboard";

const Sidebar = ({ extended }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const [tabs, setTabs] = useState([{ name: "Dashboard" }]);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
   const [filterInput, setFilterInput] = useState({});

  const navigate = useNavigate();

  const renderIcon = (iconName, size = 24) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  const handleMenuClick = (menuName, path, element) => {
    if (menuName === "Dashboard") return;

    const exists = tabs.find((t) => t.name === menuName);
    if (!exists) {
      setTabs([...tabs, { name: menuName, element }]);
    }
    setActiveTab(menuName);
    navigate("/dashboard");

    
    setMobileOpen(false);
  };

  const handleRemoveTab = (menuName, e) => {
    if (e) e.stopPropagation();
    if (menuName === "Dashboard") return;

    const newTabs = tabs.filter((tab) => tab.name !== menuName);
    setTabs(newTabs);
    if (activeTab === menuName) {
      setActiveTab("Dashboard");
    }
  };

  const filteredItems = componentsConfig.filter((item) => {
    const query = search.toLowerCase();
    return item.name.toLowerCase().includes(query);
  });

  return (
    <div className="flex min-h-screen w-screen relative bg-indigo-500">
      
      <button
        className="sm:hidden p-3 text-indigo-600 fixed top-2 left-2 z-50 bg-white rounded-md shadow"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 min-h-screen bg-indigo-500 text-white transition-all duration-300 z-40
          ${extended ? "w-64" : "w-20"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        <nav className="flex flex-col p-2 pt-7 space-y-2 mb-96">
          {filteredItems.map((item) => (
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
                      className="flex items-center gap-2 p-1 font-semibold rounded w-full text-left hover:bg-blue-950"
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
                      className={`absolute top-0 left-full bg-white text-gray-900 shadow-lg border rounded-md z-50 transition-all duration-300 ${
                        extended ? "ml-1 w-56" : "ml-2 w-48"
                      }`}
                    >
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <button
                            key={child.path}
                            className="px-6 py-2 text-sm text-left hover:bg-gray-200"
                            onClick={() =>
                              handleMenuClick(child.name, child.path, child.element)
                            }
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  className={`flex items-center gap-2 font-semibold p-2 rounded hover:bg-blue-950 ${
                    extended ? "w-full" : "justify-center"
                  }`}
                  onClick={() =>
                    handleMenuClick(item.name, item.path, item.element)
                  }
                >
                  {renderIcon(item.icon, 24)}
                  {extended && item.name}
                </button>
              )}
            </div>
          ))}
        </nav>

      
        <div className="flex justify-between gap-2 items-center px-3 ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-full border bg-gray-100 border-gray-300 rounded-md text-black"
          />
        </div>
      </aside>

      <main
        className={`flex-1 bg-gray-100 transition-all duration-300 min-h-screen
          ${extended ? "sm:ml-64" : "sm:ml-20"} 
          ${mobileOpen ? "ml-44" : "ml-0"}
        `}
      >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={setActiveTab}
                onRemoveTab={handleRemoveTab}
              />
            }
          />
        </Routes>

        {!window.location.pathname.includes("/dashboard") && (
          <Dashboard
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            onRemoveTab={handleRemoveTab}
          />
        )}
      </main>
    </div>
  );
};

export default Sidebar;
