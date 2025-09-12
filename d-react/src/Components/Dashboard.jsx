import React from "react";
import { X } from "lucide-react";
import Section from "./Section";

const Dashboard = ({ tabs = [], activeTab = null, onTabClick, onRemoveTab }) => {
  return (
    <div className="flex-1 p-6">
    
      <div className="text-xl h-[70px] m-2 rounded-md shadow-md p-4 flex gap-2 items-center bg-white">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex items-center gap-2 px-3 py-1 rounded-md cursor-pointer ${
              activeTab === tab.name
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => onTabClick(tab.name)}
          >
            <span>{tab.name}</span>
    
            {tab.name !== "Dashboard" && (
              <X
                className="w-4 h-4 cursor-pointer hover:bg-gray-300 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveTab(tab.name, e);
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div >
    
        <div >
          {tabs.find((tab) => tab.name === activeTab)?.element}
        </div>

  
        {activeTab === "Dashboard" && (
          <div className="w-full ">
            <Section />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;