import React, { useState, useEffect } from "react";
import TasksData from "./TasksData";
import Table from "./Table";
import InfiniteScroll from "react-infinite-scroll-component";

const Tasks = () => {
  const [visibleTasks, setVisibleTasks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [openColumn, setOpenColumn] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (TasksData.length > 0) {
    
      setVisibleTasks(TasksData.slice(0, 5));

      
    }}, []);  
     
 const fetchDataMore = () => {
  setLoading(true); 

  const currentLength = visibleTasks.length;
  const newTasks = TasksData.slice(currentLength, currentLength + 5);

  setTimeout(() => {
    setVisibleTasks((prev) => {
      const updated = [...prev, ...newTasks];

      if (updated.length >= TasksData.length) {
        setHasMore(false);
      }

      return updated;
    });

    setLoading(false);
  }, 1000); 
};


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

  const processedTasks = applySorting(applyFilters(visibleTasks));

  return (
    <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Tasks
      </h1>
      <InfiniteScroll
        dataLength={visibleTasks.length}
        next={fetchDataMore}
        hasMore={hasMore}
      scrollableTarget="tableScrollContainer" 
      >

    <div  
     id="tableScrollContainer"
     className="overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-md max-h-[400px]">
        <Table
         loading={loading}
        currentTasks={processedTasks}
        openColumn={openColumn}
        setOpenColumn={setOpenColumn}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        filters={filters}
        setFilters={setFilters}
         hasMore={hasMore}
      /></div>
  
      </InfiniteScroll> 
    </div>
  );
};

export default Tasks;
