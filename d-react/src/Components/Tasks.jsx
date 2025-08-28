import React, { useState } from "react";
import TasksData from "./TasksData";
import Table from "./Table";

const Tasks = () => {
  const [openColumn, setOpenColumn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filters,setFilters] = useState({});


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
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, filteredTasks.length);



  return (
    <div>
      <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Tasks
        </h1>
        <div className=" shadow-lg rounded-lg">
          
          <Table openColumn={openColumn} setOpenColumn={setOpenColumn} sortConfig={sortConfig} setSortConfig={setSortConfig} 
          currentTasks={currentTasks} filters={filters} setFilters={setFilters} />

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
