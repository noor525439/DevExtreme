import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Dashboard from "./Dashboard";

const Layout = () => {
  
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    if (!tabs.includes(tab)) {
      setTabs([...tabs, tab]);
    }
    setActiveTab(tab);
  };

  const handleRemoveTab = (tab) => {
    setTabs(tabs.filter((t) => t !== tab));
    if (activeTab === tab) {
      setActiveTab(tabs.length > 0 ? tabs[0] : null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onRemoveTab={handleRemoveTab}
        />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={
              <Dashboard
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onRemoveTab={handleRemoveTab}
              />
            } />
            <Route path="/modules" element={
              <Modules
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onRemoveTab={handleRemoveTab}
              />
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
