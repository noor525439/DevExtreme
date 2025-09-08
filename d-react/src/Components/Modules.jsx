import { Search } from 'lucide-react';
import React, { useState } from 'react'

const Modules = () => {
      
const [filter, setFilter] = useState("");
  const [modules, setModules] = useState([
    { id: 1, name: "Wizard", text: "New", createdBy: "zubairkhan" },
    { id: 2, name: "Manual Sales", text: "Manual Sales", createdBy: "zubairkhan" },
    { id: 3, name: "Stock Location", text: "Stock Location", createdBy: "zubairkhan" },
    { id: 4, name: "Payment", text: "Payment", createdBy: "zubairkhan" },
    { id: 5, name: "Bank", text: "Bank", createdBy: "zubairkhan" },
    { id: 6, name: "Master Data", text: "Master Data", createdBy: "zubairkhan" },
    { id: 7, name: "Products", text: "Product", createdBy: "zubairkhan" },
    { id: 8, name: "Inventory", text: "Inventory", createdBy: "zubairkhan" },
  ]);

  const filteredModules = modules.filter((m) =>
    m.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
  <div className='flex-1 p-6'> 
    <h1 className='text-5xl font-bold '>Module list</h1>

    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="font-semibold mb-2">Filters</h2>
      <div className="flex space-x-2">
        <select className="border rounded px-2 py-1">
          <option>Equal</option>
          <option>Contains</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
          Apply Filter
        </button>
        <button
          className="bg-gray-400 text-white px-3 py-1 rounded"
          onClick={() => setFilter("")}
        >
          Reset
        </button>
      </div>
    </div>

    <div className="flex justify-between items-center mb-2">
      <div className="space-x-2">
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Export To Excel
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add New
        </button>
      </div>
      <span className="text-sm text-gray-600">
        Records: {filteredModules.length}/{modules.length}
      </span>
    </div>

    <div className="bg-white rounded-lg shadow overflow-auto">
      <table className="w-full text-left border border-gray-300 border-collapse">
  <thead>
    <tr className="bg-indigo-500 text-white">
      <th className=" p-2 border border-gray-300 w-56">Module Name</th>
      <th className=" p-2 border border-gray-300 w-56">Text</th>
      <th className="p-2 border border-gray-300 w-56">Created By</th>
      {/* ✅ Extra column with wide width */}
      <th className="p-2 border border-gray-300"></th>
    </tr>
  </thead>
  <tbody>
    {filteredModules.map((m, index) => (
      <tr
        key={m.id}
        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-50 transition`}
      >
        <td className="p-2 border border-gray-300">
          <input type="checkbox" className="mr-2" />
          {m.name}
        </td>
        <td className="p-2 border border-gray-300">{m.text}</td>
        <td className="p-2 border border-gray-300">{m.createdBy}</td>
        {/* ✅ Extra empty column */}
        <td className="p-2 border border-gray-300"></td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
    <p className='font-bold text-xl text-gray-900'>Records:
    <span className='text-xl text-gray-500 font-bold'>10/28</span></p>
  </div>
)

}

export default Modules
