import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Dashboard from "./Dashboard";
import ErrorBoundary from "./ErrorBoundary";
import Recipe from "./Recipe";



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

    <ErrorBoundary><Navbar /></ErrorBoundary>
    
      <div className="flex flex-1">

      <ErrorBoundary> <Sidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onRemoveTab={handleRemoveTab}
        /></ErrorBoundary>

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={
              <ErrorBoundary>  <Dashboard
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onRemoveTab={handleRemoveTab}
              /></ErrorBoundary>
            } />
            <Route path="/modules" element={
              <ErrorBoundary> 
              <Modules
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onRemoveTab={handleRemoveTab}
              /></ErrorBoundary>
              
            } />
              <Route path="/recipe" element={
              <ErrorBoundary> 
              <Recipe
            
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                onRemoveTab={handleRemoveTab}
              /></ErrorBoundary>
              
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;




