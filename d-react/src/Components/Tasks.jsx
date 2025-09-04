import React, { useState, useEffect } from "react";
import TasksData from "./TasksData";
import Table from "./Table";

const Tasks = () => {
  const [visibleTasks, setVisibleTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [openColumn, setOpenColumn] = useState(null);

  useEffect(() => {
    if (TasksData.length > 0) {
      // 🔹 Step 1: Show first 5 instantly
      setVisibleTasks(TasksData.slice(0, 5));

      // 🔹 Step 2: Show rest in chunks of 5
      setLoading(true);
      let index = 5;
      const interval = setInterval(() => {
        const nextChunk = TasksData.slice(index, index + 5);
        setVisibleTasks((prev) => [...prev, ...nextChunk]);
        index += 5;

        if (index >= TasksData.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  
  const applyFilters = (tasks) => {
    return tasks.filter((task) => {
      return Object.keys(filters).every((key) => {
        const { value, type } = filters[key] || {};
        if (!value) return true;

        const taskValue = String(task[key] || "").toLowerCase();
        const filterValue = String(value).toLowerCase();

        switch (type) {
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
          case "date":
            return taskValue === filterValue;
          default:
            return true;
        }
      });
    });
  };

  // ✅ Apply sorting
  const applySorting = (tasks) => {
    if (!sortConfig.key) return tasks;

    return [...tasks].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  // 🔹 Final tasks after filter + sort
  const processedTasks = applySorting(applyFilters(visibleTasks));

  return (
    <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Tasks
      </h1>

      <Table
        currentTasks={processedTasks}
        loading={loading}
        openColumn={openColumn}
        setOpenColumn={setOpenColumn}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Tasks;
