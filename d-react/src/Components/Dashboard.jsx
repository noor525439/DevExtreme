import React from "react";
import { X } from "lucide-react";
import Section from "./Section";

const Dashboard = ({ tabs = [], activeTab = null, onTabClick, onRemoveTab }) => {
  return (
    <div className="flex-1 p-6">
      {/* Tabs System */}
      <div
        className={`text-xl h-[70px] m-2 rounded-md shadow-md p-4 flex gap-2 items-center ${
          tabs.length === 0 ? "hidden" : "bg-white"
        }`}
      >
        {tabs.length > 0 &&
          tabs.map((tab) => (
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
              <X
                className="w-4 h-4 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveTab(tab.name);
                }}
              />
            </div>
          ))}
      </div>

    
      <div className="bg-white m-2 rounded-md shadow">
        {tabs.find((tab) => tab.name === activeTab)?.element}
      </div>

    
      <Section/>
    </div>
  );
};

export default Dashboard;
