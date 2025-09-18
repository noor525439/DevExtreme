import { ArrowDown, Minus, RefreshCcw, Search, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const allModules = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Module ${i + 1}`,
  text: `Text ${i + 1}`,
  createdBy: "zubairkhan",
}));
const Modules = ({ tabs = [], activeTab, onTabClick, onRemoveTab }) => {
  const [modules, setModules] = useState(allModules.slice(0, 10));
  const [loading, setLoading] = useState(false);
   const [filterInput, setFilterInput] = useState({});
  const [appliedFilter, setAppliedFilter] = useState({});
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

 useEffect(() => {
    const saved = localStorage.getItem("filterInput");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFilterInput(parsed);
        setAppliedFilter(parsed); 
      } catch {
        localStorage.removeItem("filterInput");
      }
    }
  }, []);



   
  const loadMore = () => {
    if (modules.length >= allModules.length) return;
    setLoading(true);
    setTimeout(() => {
      const next = allModules.slice(modules.length, modules.length + 10);
      setModules(prev => [...prev, ...next]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      loadMore();
    }
  };

   const handleInputChange = (tab, value) => {
    setFilterInput((prev) => {
      const updated = { ...prev, [tab]: value };
      localStorage.setItem("filterInput", JSON.stringify(updated));
      return updated;
    });
  };

   const handleReset = () => {
    setFilterInput({});
    setAppliedFilter({});
    localStorage.removeItem("filterInput");
  };


  const handleApplyFilter = () => {
    setAppliedFilter(filterInput);
  };
   const filteredModules = modules.filter((m) =>
    m.name.toLowerCase().includes((appliedFilter[activeTab] || "").toLowerCase())
  );


  
  return (
    <div className="flex-1 p-4 md:p-6 bg-gray-50">
      
    
      <div className={`sticky top-0 z-30 text-lg md:text-xl h-[60px] md:h-[70px] rounded-md shadow-md p-2 md:p-4 flex gap-2 items-center overflow-x-auto ${tabs.length === 0 ? "hidden" : "bg-white"}`}>
        {tabs.length === 0 ? (
          <p className="text-gray-50 w-full text-center"></p>
        ) : (
          tabs.map(tab => (
            <div
              key={tab}
              className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1 rounded-md cursor-pointer whitespace-nowrap min-w-max ${
                activeTab === tab ? "bg-gray-200 text-black" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => onTabClick(tab)}
            >
    
              <span className="text-sm md:text-base">{tab}</span>
              <X
                className="w-3 h-3 md:w-4 md:h-4 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  onRemoveTab(tab);
                }}
              />
            </div>
          ))
        )}
      </div>

      {activeTab !== "Modules" && (
        <h1 className="text-xl md:text-2xl font-bold mt-20 md:mt-16 mb-4">Module list</h1>
      )}

    
      <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg md:text-xl">Filters</h2>
          <div 
            className="bg-white border-2 border-indigo-500 rounded-full text-center font-bold text-indigo-500 h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Minus size={20} />
          </div>
        </div>

        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <select className="border rounded px-2 py-1 text-sm md:text-base">
              <option>Equal</option>
              <option>Contains</option>
            </select>
            <input
        type="text"
        placeholder="Search by name"
        value={filterInput[activeTab] || ""}
        onChange={(e) => handleInputChange(activeTab, e.target.value)}
        className="border rounded px-2 py-1 flex-1 text-sm md:text-base"
      />
             
          </div>

          <div className="mt-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button
  className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base"
  onClick={handleApplyFilter}
>
  Apply Filter
</button>
           <button
  className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base"
  onClick={handleReset}
>
  Reset
</button>
          </div>
        </div>
      </div>

      
      <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base whitespace-nowrap">
                Export To Excel
              </button>
              <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base whitespace-nowrap">
                Add New
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800 text-sm md:text-base">Dense Row</span>
              <button
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
                  enabled ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                    enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800 text-sm md:text-base">Server side-sorting</span>
              <button
                onClick={() => setEnabled2(!enabled2)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
                  enabled2 ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                    enabled2 ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <RefreshCcw className="w-6 h-6 md:w-8 md:h-8 text-white p-1 rounded-full bg-indigo-600" />
            <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded whitespace-nowrap">
              Action
            </button>
          </div>
        </div>
      </div>

       <div
        className="bg-white w-full rounded-lg shadow overflow-auto h-[430px]"
        onScroll={handleScroll}
      >
        <div className="max-h-[1500px]  border border-gray-300">
  <table className="w-full text-left border-collapse">
    <thead className='sticky top-0 z-50'>
      <tr className="bg-indigo-500 text-white">
        <th className="p-2 border border-gray-300 w-44 sticky top-0 z-50 bg-indigo-500 ">
          <div className="flex justify-between items-center">
            <span>Module Name</span>
            <Search className="w-4 h-4 cursor-pointer" />
          </div>
        </th>
        <th className="p-2 border border-gray-300 w-44 sticky top-0 bg-indigo-500 z-10">
          <div className="flex justify-between items-center">
            <span>Text</span>
            <Search className="w-4 h-4 cursor-pointer" />
          </div>
        </th>
        <th className="p-2 border border-gray-300 w-44 sticky top-0 bg-indigo-500 z-10">
          <div className="flex justify-between items-center">
            <span>Created By</span>
            <Search className="w-4 h-4 cursor-pointer" />
          </div>
        </th>
        <th className="p-2 border border-gray-300 w-[1500px] sticky top-0 bg-indigo-500 z-10"></th>
      </tr>
    </thead>

    <tbody>
      {filteredModules.length === 0 && !loading && (
        <tr>
          <td colSpan="4" className="p-4 text-center text-gray-400">
            No results found
          </td>
        </tr>
      )}

      {filteredModules.map((m, index) => (
        <tr
          key={m.id}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } hover:bg-gray-50 transition`}
        >
          <td className="p-2 border border-gray-300">{m.name}</td>
          <td className="p-2 border border-gray-300">{m.text}</td>
          <td className="p-2 border border-gray-300">{m.createdBy}</td>
          <td className="p-2 border border-gray-300"></td>
        </tr>
      ))}

      {loading && (
        <tr>
          <td colSpan="4" className="p-4 text-center">
            <div className="w-6 h-6 mx-auto border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </td>
        </tr>
      )}

      {!loading && modules.length >= allModules.length && filteredModules.length > 0 && (
        <tr>
          <td colSpan="4" className="p-4 text-center text-gray-400">
            No more tasks
          </td>
        </tr>
      )}
    </tbody>
  </table>
 
</div>

      </div>
       <p className='text-xl mx-3 font-bold text-gray-800'>Records:<span className="text-gray-800 font-semibold"> 50/50</span></p>
    </div>
  );
};

export default Modules;