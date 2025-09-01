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
}) => {
  const handleDropdownSelect = (column, type) => {
    if (type === "reset") {
      setFilters((prev) => ({
        ...prev,
        [column]: { value: "", type: "contains" },
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

  // ✅ Local date formatter
  const formatLocalDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <table className="w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
        <thead className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
          <tr>
            <th
              className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 cursor-pointer"
              onClick={() =>
                setSortConfig((prev) => ({
                  key: "id",
                  direction:
                    prev.key === "id" && prev.direction === "asc" ? "desc" : "asc",
                }))
              }
            >
              Task Id{" "}
              {sortConfig.key === "id" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Subject
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Status
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Priority
            </th>
            <th className="px-8 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Assigned to
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Start date
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Due Date
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Priority Num
            </th>
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-600 uppercase">
              Completion
            </th>
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
                    filters.startDate?.value ? new Date(filters.startDate.value) : null
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
                  className="w-28 px-2 py-1 rounded dark:border-gray-600 
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
                  className="w-28 px-2 py-1 rounded  
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
          {currentTasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.id}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.subject}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.status}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.priority}
              </td>
              <td className="px-6 py-2 text-gray-800 dark:text-gray-200">
                {task.assignedTo}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.startDate}
              </td>
              <td className="px-8 py-2 text-gray-800 dark:text-gray-200">
                {task.dueDate}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.priorityNum}
              </td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {task.completion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
