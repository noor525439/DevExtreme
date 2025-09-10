import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import componentsConfig from "./ComponentsConfig";
import Dashboard from "./Dashboard";

const Sidebar = ({ extended }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const navigate = useNavigate();

  const renderIcon = (iconName, size = 24) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  const handleMenuClick = (menuName, path, element) => {
    // Check if tab already open
    const exists = tabs.find((t) => t.name === menuName);
    if (!exists) {
      setTabs([...tabs, { name: menuName, element }]);
    }
    setActiveTab(menuName);
    navigate("/dashboard"); // always go dashboard
  };

  const handleRemoveTab = (menuName) => {
    const newTabs = tabs.filter((tab) => tab.name !== menuName);
    setTabs(newTabs);
    if (activeTab === menuName) {
      setActiveTab(newTabs[0]?.name || null);
    }
  };

  const filteredItems = componentsConfig.filter((item) => {
    const query = search.toLowerCase();
    if (item.children) {
      return (
        item.name.toLowerCase().includes(query) ||
        item.children.some((child) =>
          child.name.toLowerCase().includes(query)
        )
      );
    }
    return item.name.toLowerCase().includes(query);
  });

  return (
    <div className="flex min-h-screen w-screen">
      {/* Sidebar */}
      <aside
        className={`fixed h-screen left-0 bg-indigo-500 transition-all duration-300 ${
          extended ? "w-64" : "w-20"
        }`}
      >
        <nav className="flex flex-col p-2 pt-7 space-y-2 mb-80 text-white">
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

        {/* Search */}
        <div className="flex justify-between gap-2 items-center px-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-full border bg-gray-100 border-gray-300 rounded-md"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 bg-gray-100 transition-all duration-300 ${
          extended ? "ml-64" : "ml-20"
        }`}
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
      </main>
    </div>
  );
};

export default Sidebar;
