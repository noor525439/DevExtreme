import React from "react";
import { Search, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Table = ({
  openColumn,
  setOpenColumn,
  sortConfig,
  setSortConfig,
  currentTasks,
  filters,
  setFilters,
  loading,
}) => {

  const handleDropdownSelect = (column, type) => {
    if (type === "reset") {
      let defaultType = "contains";
      if (column === "priority") defaultType = "equals";
      if (column === "startDate" || column === "dueDate") defaultType = "date";

      setFilters((prev) => ({
        ...prev,
        [column]: { value: "", type: defaultType },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [column]: { ...prev[column], type },
      }));
    }
    setOpenColumn(null);
  };

  const Dropdown = ({ column }) => (
    <div className="absolute mt-1 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md text-xs z-50">
      <ul>
        {[
          "contains",
          "not_contains",
          "starts_with",
          "ends_with",
          "equals",
          "not_equals",
          "reset",
        ].map((opt) => (
          <li
            key={opt}
            onClick={() => handleDropdownSelect(column, opt)}
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {opt.replace("_", " ")}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderFilterInput = (column) => (
    <div className="flex justify-around gap-1 relative">
      <Search
        onClick={() => setOpenColumn(openColumn === column ? null : column)}
        className="cursor-pointer text-gray-600 dark:text-gray-300"
      />
      <input
        type="text"
        value={filters[column]?.value || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            [column]: {
              value: e.target.value,
              type: prev[column]?.type || "contains",
            },
          }))
        }
        className="w-full px-2 py-1 rounded 
                   bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                   placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-1 
                   focus:ring-blue-500"
      />
      {openColumn === column && <Dropdown column={column} />}
    </div>
  );

  const formatLocalDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div>
      <table className="w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
        <thead className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
          <tr>
            {[
              { key: "id", label: "Task Id" },
              { key: "subject", label: "Subject" },
              { key: "status", label: "Status" },
              { key: "priority", label: "Priority" },
              { key: "assignedTo", label: "Assigned To" },
              { key: "startDate", label: "Start Date" },
              { key: "dueDate", label: "Due Date" },
              { key: "priorityNum", label: "Priority Num" },
              { key: "completion", label: "Completion" },
            ].map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 cursor-pointer"
                onClick={() => handleSort(col.key)}
              >
                {col.label}{" "}
                {sortConfig.key === col.key &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
            ))}
          </tr>

    
          <tr>
            <td className="px-2 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("id")}
            </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("subject")}
            </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("status")}
            </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              <select
                value={filters.priority?.value || ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priority: { value: e.target.value, type: "equals" },
                  }))
                }
                className="dark:border-gray-600 px-2 py-1 rounded 
                           bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">(All)</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Normal">Normal</option>
              </select>
            </td>
            <td className="px-8 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("assignedTo")}
            </td>
            <td className="py-2 border-b border-gray-300 dark:border-gray-600">
              <div className="flex items-center gap-1">
                <Search className="text-gray-600 dark:text-gray-300" />
                <DatePicker
                  selected={
                    filters.startDate?.value
                      ? new Date(filters.startDate.value)
                      : null
                  }
                  onChange={(date) =>
                    setFilters((prev) => ({
                      ...prev,
                      startDate: {
                        value: date ? formatLocalDate(date) : "",
                        type: "date",
                      },
                    }))
                  }
                  isClearable
                  className="w-20 py-1 rounded dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="text-gray-600 dark:text-gray-300" />
              </div>
            </td>
            <td className="px-6 py-2 border-b border-gray-300 dark:border-gray-600">
              <div className="flex items-center gap-1">
                <Search className="text-gray-600 dark:text-gray-300" />
                <DatePicker
                  selected={
                    filters.dueDate?.value ? new Date(filters.dueDate.value) : null
                  }
                  onChange={(date) =>
                    setFilters((prev) => ({
                      ...prev,
                      dueDate: {
                        value: date ? formatLocalDate(date) : "",
                        type: "date",
                      },
                    }))
                  }
                  isClearable
                  className="w-20 px-2 py-1 rounded  
                             bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Calendar className="text-gray-600 dark:text-gray-300" />
              </div>
            </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("priorityNum")}
            </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              {renderFilterInput("completion")}
            </td>
          </tr>
        </thead>

        <tbody>
          {currentTasks.length > 0 ? (
            <>
              {currentTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b py-3 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
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

          
              {loading && (
                <tr>
                  <td colSpan="9" className="text-center py-6">
                    <div className="flex justify-center items-center gap-3">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Loading...
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-6">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
