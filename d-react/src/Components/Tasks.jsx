import React, { useState } from "react";
import TasksData from "./TasksData";
import Table from "./Table";

const Tasks = () => {
  const [openColumn, setOpenColumn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  
  const normalizeDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  let filteredTasks = TasksData.filter((task) => {
    
    const passGeneralFilters = Object.entries(filters).every(
      ([key, filterObj]) => {
        if (!filterObj || !filterObj.value) return true;

        if (key === "priority") {
          return (
            filterObj.value === "" || task.priority === filterObj.value
          );
        }

        
        if (key === "startDate" || key === "dueDate") return true;

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
      }
    );

    if (!passGeneralFilters) return false;

    
    const taskStart = task.startDate ? normalizeDate(task.startDate) : null;
    const taskDue = task.dueDate ? normalizeDate(task.dueDate) : null;
    const filterStart = filters.startDate?.value
      ? normalizeDate(filters.startDate.value)
      : null;
    const filterDue = filters.dueDate?.value
      ? normalizeDate(filters.dueDate.value)
      : null;

    
    if (filterStart) {
      if (!taskStart) return false;
      if (taskStart < filterStart) return false;
    }

    
    if (filterDue) {
      if (!taskDue) return false;
      if (taskDue > filterDue) return false;
    }

    return true;
  });

  
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, filteredTasks.length);

  return (
    <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Tasks
      </h1>

      <Table
        openColumn={openColumn}
        setOpenColumn={setOpenColumn}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        currentTasks={currentTasks}
        filters={filters}
        setFilters={setFilters}
      />

  
      <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
        <div className="text-gray-700 dark:text-gray-300 text-sm">
          {startItem}–{endItem} of {filteredTasks.length} items
        </div>

        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
          <span className="text-sm">Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-3 py-1 rounded transition ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </div>

  
      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-10 pt-6 pb-4 rounded-lg transition-colors duration-300">
        <hr className="border-gray-300 dark:border-gray-700 mb-3" />
        <p className="text-start">©2011-2025 DevExtreme App Inc.</p>
        <p className="text-start">
          All trademarks or registered trademarks are property of their respective owners.
        </p>
      </footer>
    </div>
  );
};

export default Tasks;
