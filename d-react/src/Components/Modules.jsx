import { ArrowDown, Minus, RefreshCcw, Search, X } from 'lucide-react';
import React, { useState } from 'react';

const allModules = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Module ${i + 1}`,
  text: `Text ${i + 1}`,
  createdBy: "zubairkhan",
}));

const Modules = ({ tabs, activeTab, onTabClick, onRemoveTab }) => {
  const [modules, setModules] = useState(allModules.slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [filterInput, setFilterInput] = useState({});
  const [appliedFilter, setAppliedFilter] = useState({});
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);

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

  const handleFilterChange = (tab, value) => {
    setFilterInput(prev => ({
      ...prev,
      [tab]: value,
    }));
  };

  const applyFilter = () => {
    setAppliedFilter({ ...filterInput });
  };

  const filteredModules = modules.filter(m =>
    m.name.toLowerCase().includes((appliedFilter[activeTab] || "").toLowerCase())
  );

  return (
    <div className="flex-1 p-6">
      
      <div className="bg-white text-xl h-[70px] m-2 rounded-md shadow p-4 flex gap-2 items-center">
        {tabs.length === 0 ? (
          <p className="text-gray-400 w-full text-center"></p>
        ) : (
          tabs.map(tab => (
            <div
              key={tab}
              className={`flex items-center gap-2 px-2 rounded-md cursor-pointer ${
                activeTab === tab ? "bg-gray-200 text-black" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => onTabClick(tab)}
            >
              <span>{tab}</span>
              <X
                className="w-4 h-4 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  onRemoveTab(tab);
                }}
              />
            </div>
          ))
        )}
      </div>

      <h1 className="text-2xl font-bold m-3">Module list</h1>


      <div className="bg-white pb-4 p-2 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl mx-2 mb-2">Filters</h2>
          <div className="bg-white border-2 border-indigo-500 mb-2 mx-2 rounded-full text-center font-bold text-indigo-500 h-6 w-6">
            <Minus size={22} />
          </div>
        </div>

        <div className="flex space-x-2">
          <select className="border rounded px-2 py-1">
            <option>Equal</option>
            <option>Contains</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            value={filterInput[activeTab] || ""}
            onChange={e => handleFilterChange(activeTab, e.target.value)}
            className="border rounded px-2 py-1 flex-1"
          />
        </div>

        <div className="mt-2">
          <button
            className="bg-indigo-500 text-white mx-2 px-3 py-1 rounded"
            onClick={applyFilter}
          >
            Apply Filter
          </button>
          <button
            className="bg-indigo-500 text-white px-3 py-1 rounded"
            onClick={() => { setFilterInput({}); setAppliedFilter({}); }}
          >
            Reset
          </button>
        </div>
      </div>

      
      <div className="flex justify-between h-[80px] bg-white items-center mb-2">
        <div className="space-x-2">
          <button className="bg-indigo-500 text-white mx-2 px-3 py-1 rounded">
            Export To Excel
          </button>
          <button className="bg-indigo-500 text-white px-3 py-1 rounded">
            Add New
          </button>
          <span className="font-semibold text-gray-800 text-xl">Dense Row</span>
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

          <span className="font-semibold text-gray-800 text-xl">Server side-sorting</span>
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

        <div className="flex justify-end">
          <RefreshCcw className="w-8 h-8 text-white p-1 mx-2 rounded-full bg-indigo-600" />
          <button className="text-sm bg-indigo-600 text-white px-3 mx-2 py-1">
            Action
          </button>
        </div>
      </div>

    
      <div
        className="bg-white w-full rounded-lg shadow overflow-auto h-[430px]"
        onScroll={handleScroll}
      >
        <table className="w-full text-left border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="p-2 border border-gray-300 w-52">
                <div className="flex justify-between items-center">
                  <span>Module Name</span>
                  <Search className="w-4 h-4 cursor-pointer" />
                </div>
              </th>
              <th className="p-2 border border-gray-300 w-52">
                <div className="flex justify-between items-center">
                  <span>Text</span>
                  <Search className="w-4 h-4 cursor-pointer" />
                </div>
              </th>
              <th className="p-2 border border-gray-300 w-52">
                <div className="flex justify-between items-center">
                  <span>Created By</span>
                  <Search className="w-4 h-4 cursor-pointer" />
                </div>
              </th>
              <th className='p-2 border border-gray-300 w-1/2'></th>
            </tr>
          </thead>

          <tbody>
            {filteredModules.length === 0 && !loading && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-400">
                  No results found
                </td>
              </tr>
            )}

            {filteredModules.map((m, index) => (
              <tr
                key={m.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-50 transition`}
              >
                <td className="p-2 border border-gray-300">{m.name}</td>
                <td className="p-2 border border-gray-300">{m.text}</td>
                <td className="p-2 border border-gray-300">{m.createdBy}</td>
                <td className='p-2 border border-gray-300'></td>
              </tr>
            ))}

            {loading && (
              <tr>
                <td colSpan="3" className="p-4 text-center">
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
  );
};

export default Modules;
