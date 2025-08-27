import React, { useState } from "react";
import { Search } from "lucide-react";
import TasksData from "./TasksData";

const Tasks = () => {
  const [openColumn, setOpenColumn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);


  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  
  const sortedTasks = [...TasksData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(TasksData.length / itemsPerPage);

  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, TasksData.length);

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
    <div>
      <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Tasks
        </h1>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
            <thead className=" dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
              <tr>
            
                <th
                  className="px-4 py-3 border-b border-gray-300 cursor-pointer"
                  onClick={() =>
                    setSortConfig((prev) => ({
                      key: "id",
                      direction:
                        prev.key === "id" && prev.direction === "asc"
                          ? "desc"
                          : "asc",
                    }))
                  }
                >
                  Task Id{" "}
                  {sortConfig.key === "id" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th className="px-4 py-3 border-b border-gray-300">Subject</th>
                <th className="px-4 py-3 border-b border-gray-300">Status</th>
                <th className="px-4 py-3 border-b border-gray-300">Priority</th>
                <th className="px-4 py-3 border-b border-gray-300">Assigned to</th>
                <th className="px-4 py-3 border-b border-gray-300">Start date</th>
                <th className="px-4 py-3 border-b border-gray-300">Due Date</th>
                <th className="px-4 py-3 border-b border-gray-300">Priority</th>
                <th className="px-4 py-3 border-b border-gray-300">Completion</th>
              </tr>

        
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 cursor-pointer">
                  <button onClick={() => setOpenColumn(openColumn === "id" ? null : "id")}>
                    <Search />
                  </button>
                  {openColumn === "id" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "subject" ? null : "subject")}>
                    <Search />
                  </button>
                  {openColumn === "subject" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "status" ? null : "status")}>
                    <Search />
                  </button>
                  {openColumn === "status" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">(All)</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "assignedTo" ? null : "assignedTo")}>
                    <Search />
                  </button>
                  {openColumn === "assignedTo" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "startDate" ? null : "startDate")}>
                    <Search />
                  </button>
                  {openColumn === "startDate" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "dueDate" ? null : "dueDate")}>
                    <Search />
                  </button>
                  {openColumn === "dueDate" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "priority" ? null : "priority")}>
                    <Search />
                  </button>
                  {openColumn === "priority" && <Dropdown />}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button onClick={() => setOpenColumn(openColumn === "completion" ? null : "completion")}>
                    <Search />
                  </button>
                  {openColumn === "completion" && <Dropdown />}
                </td>
              </tr>
            </thead>

            <tbody>
              {currentTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.id}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.subject}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.status}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.priority}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.assignedTo}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.startDate}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.dueDate}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.priorityNum}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>

  
          <div className="flex justify-between items-center mt-4 px-4">
            <div className="text-gray-700 dark:text-gray-300">
              {startItem}–{endItem} of {TasksData.length} items
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
        </div>

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-9 pt-14 pb-3 rounded-lg transition-colors duration-300">
          <hr className="border-gray-300 dark:border-gray-600 mb-3" />
          <p className="text-start">©2011-2025 DevExtreme App Inc.</p>
          <p className="text-start">
            All trademarks or registered trademarks are property of their
            respective owners.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Tasks;
