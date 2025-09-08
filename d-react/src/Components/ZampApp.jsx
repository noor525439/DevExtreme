import React, { useState } from "react";
import profile from "../assets/images/profile.webp";

export default function ModulesList() {
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
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div className="w-60 bg-gray-300 text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-gray-800">App</h2>
        <nav className="flex flex-col space-y-2">
          <button className="text-left hover:bg-indigo-500 rounded p-2">Dashboard</button>
          <button className="text-left hover:bg-indigo-500 rounded p-2">Users</button>
          <button className="text-left hover:bg-indigo-500 rounded p-2">Modules</button>
          <button className="text-left hover:bg-indigo-500 rounded p-2">Companies</button>
          <button className="text-left hover:bg-indigo-500 rounded p-2">Departments</button>
          <button className="text-left hover:bg-indigo-500 rounded p-2">Accounting</button>
        </nav>
        <div className="mt-auto text-sm pt-4">©2025, made with ❤ by ZAM</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Modules List</h1>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Zubair Khan</span>
            <img
              src={profile}
              alt="user"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>

        {/* Filter Section */}
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

        {/* Action Buttons */}
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

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-auto">
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="p-2">Select</th>
                <th className="p-2">Module Name</th>
                <th className="p-2">Text</th>
                <th className="p-2">Created By</th>
              </tr>
            </thead>
            <tbody>
              {filteredModules.map((m) => (
                <tr
                  key={m.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">{m.name}</td>
                  <td className="p-2">{m.text}</td>
                  <td className="p-2">{m.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}