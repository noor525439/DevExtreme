import React, { useState } from "react";
import TasksData from "./TasksData";
import { Search } from "lucide-react";

const Tasks = () => {
  const [openColumn, setOpenColumn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });


  let filteredTasks = TasksData.filter((task) => {
    return Object.entries(filters).every(([key, filterObj]) => {
      if (!filterObj?.value) return true;
      const taskValue = String(task[key] || "").toLowerCase();
      const filterValue = filterObj.value.toLowerCase();

      switch (filterObj.type) {
        case "contains":
          return taskValue.includes(filterValue);
        case "not_contains":
          return !taskValue.includes(filterValue);
        case "starts_with":
          return taskValue.startsWith(filterValue);
        case "ends_with":
          return taskValue.endsWith(filterValue);
        case "equals":
          return taskValue === filterValue;
        case "not_equals":
          return taskValue !== filterValue;
        default:
          return true;
      }
    });
  });

  
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, filteredTasks.length);


  const Dropdown = () => (
    <div className="absolute mt-1 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md text-0.5 z-50">
      <ul>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Equals</li>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Does not Equal</li>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Less than</li>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Greater than</li>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Between</li>
        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Reset</li>
      </ul>
    </div>
  );

  return (
    <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Tasks</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
          <thead className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
            <tr>
              <th
                className="px-4 py-3 border-b border-gray-300 cursor-pointer"
                onClick={() =>
                  setSortConfig((prev) => ({
                    key: "id",
                    direction: prev.key === "id" && prev.direction === "asc" ? "desc" : "asc",
                  }))
                }
              >
                Task Id{" "}
                {sortConfig.key === "id" && (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
              <th className="px-4 py-3 border-b border-gray-300">Subject</th>
              <th className="px-4 py-3 border-b border-gray-300">Status</th>
              <th className="px-4 py-3 border-b border-gray-300">Priority</th>
              <th className="px-4 py-3 border-b border-gray-300">Assigned to</th>
              <th className="px-4 py-3 border-b border-gray-300">Start date</th>
              <th className="px-4 py-3 border-b border-gray-300">Due Date</th>
              <th className="px-4 py-3 border-b border-gray-300">Priority Num</th>
              <th className="px-4 py-3 border-b border-gray-300">Completion</th>
            </tr>

      
            <tr>
              {["id", "subject", "status", "priority", "assignedTo", "startDate", "dueDate", "priorityNum", "completion"].map((col) => (
                <td key={col} className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === col ? null : col)}>
                    <Search />
                  </button>
                  {openColumn === col && <Dropdown />}
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="px-4 py-2">{task.id}</td>
                <td className="px-4 py-2">{task.subject}</td>
                <td className="px-4 py-2">{task.status}</td>
                <td className="px-4 py-2">{task.priority}</td>
                <td className="px-4 py-2">{task.assignedTo}</td>
                <td className="px-4 py-2">{task.startDate}</td>
                <td className="px-4 py-2">{task.dueDate}</td>
                <td className="px-4 py-2">{task.priorityNum}</td>
                <td className="px-4 py-2">{task.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="flex justify-between items-center mt-4 px-4">
        <div className="text-gray-700 dark:text-gray-300">
          {startItem}–{endItem} of {filteredTasks.length} items
        </div>

        <div className="flex items-center gap-4">
          <span>Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1 bg-white dark:bg-gray-800"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

    
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-9 pt-14 pb-3 rounded-lg transition-colors duration-300">
        <hr className="border-gray-300 dark:border-gray-600 mb-3" />
        <p className="text-start">©2011-2025 DevExtreme App Inc.</p>
        <p className="text-start">
          All trademarks or registered trademarks are property of their respective owners.
        </p>
      </footer>
    </div>
  );
};

export default Tasks;
