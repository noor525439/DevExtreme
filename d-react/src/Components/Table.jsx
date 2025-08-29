import React, { useState } from "react";
import { Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";


const Table = ({ openColumn, setOpenColumn, sortConfig, setSortConfig, currentTasks, filters, setFilters }) => {
 

  
  

  const handleDropdownSelect = (column, type) => {
    if (type === "reset") {
      setFilters((prev) => ({
        ...prev,
        [column]: { value: "", type: "contains" }
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [column]: { ...prev[column], type }
      }));
    }
    setOpenColumn(null);
  };

  const Dropdown = ({ column }) => (
    <div className="absolute mt-1 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md text-xs z-50">
      <ul>
        <li onClick={() => handleDropdownSelect(column, "contains")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Contains</li>
        <li onClick={() => handleDropdownSelect(column, "not_contains")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Does not contain</li>
        <li onClick={() => handleDropdownSelect(column, "starts_with")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Starts with</li>
        <li onClick={() => handleDropdownSelect(column, "ends_with")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Ends with</li>
        <li onClick={() => handleDropdownSelect(column, "equals")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Equals</li>
        <li onClick={() => handleDropdownSelect(column, "not_equals")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Does not equal</li>
        <li onClick={() => handleDropdownSelect(column, "reset")} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Reset</li>
      </ul>
    </div>
  );


  const renderFilterInput = (column) => (
    <div className="flex justify-around gap-1 relative">
      <Search
        onClick={() => setOpenColumn(openColumn === column ? null : column)}
        className="cursor-pointer"
      />
      <input
        type="text"
        value={filters[column]?.value || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            [column]: { value: e.target.value, type: prev[column]?.type || "contains" }
          }))
        }
      />
      {openColumn === column && <Dropdown column={column} />}
    </div>
  );

  return (
    <div>
      <table className="w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
        <thead className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
          <tr>
            <th
              className="px-4 text-1xl py-3 border-b border-gray-300 cursor-pointer"
              onClick={() =>
                setSortConfig((prev) => ({
                  key: "id",
                  direction: prev.key === "id" && prev.direction === "asc" ? "desc" : "asc",
                }))
              }
            >
              
              Task Id{" "}
              {sortConfig.key === "id" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Subject</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Status</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Priority</th>
            <th className="px-8 py-3 border-b border-gray-300 uppercase">Assigned to</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Start date</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Due Date</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Priority</th>
            <th className="px-4 py-3 border-b border-gray-300 uppercase">Completion</th>
          </tr>


          <tr>
            <td className="px-2 py-2 border-b border-gray-300">{renderFilterInput("id")}</td>
            <td className="px-4 py-2 border-b border-gray-300">{renderFilterInput("subject")}</td>
            <td className="px-4 py-2 border-b border-gray-300">{renderFilterInput("status")}</td>
            <td className="px-4 py-2 border-b border-gray-300">
            <select
    value={filters.priority || ""}
    onChange={(e) => setFilters((prev) => ({ ...prev, priority: e.target.value }))}
    className="border px-2 py-1 rounded bg-white dark:bg-gray-800"
  >
    <option value="">(All)</option>
    <option value="Urgent">Urgent</option>
    <option value="High">High</option>
    <option value="Normal">Normal</option>
  </select>
</td>
            <td className="px-8 py-2 border-b border-gray-300">{renderFilterInput("assignedTo")}</td>
            
      
<td className=" py-2 border-b border-gray-300">
  <div className="flex justify-around gap-1">
    <Search/>
  
    <DatePicker
      selected={filters["startDate"] ? new Date(filters["startDate"]) : null}
      onChange={(date) =>
        setFilters((prev) => ({
          ...prev,
          startDate: date ? date.toISOString().split("T")[0] : ""
        }))
      }
      className="border-none w-14 rounded px-2 py-1 bg-white dark:bg-gray-800"
    > 
      </DatePicker>
      <Calendar/>
  </div>
</td>


<td className="px-6 py-2 border-b border-gray-300">
  <div className="flex justify-around gap-1">
    <Search/>
    <DatePicker
      selected={filters["dueDate"] ? new Date(filters["dueDate"]) : null}
      onChange={(date) =>
        setFilters((prev) => ({
          ...prev,
          dueDate: date ? date.toISOString().split("T")[0] : ""
        }))
      }  
      
      className=" w-14 border-none rounded px-2 py-1 bg-white dark:bg-gray-800"
    />   <Calendar/>
  </div>
</td>


            <td className="px-4 py-2 border-b border-gray-300">{renderFilterInput("dueDate")}</td>
            <td className="px-4 py-2 border-b border-gray-300">{renderFilterInput("priority")}</td>
        
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
              <td className="px-6 py-2 text-gray-800 dark:text-gray-200">{task.assignedTo}</td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.startDate}</td>
              <td className="px-8 py-2 text-gray-800 dark:text-gray-200">{task.dueDate}</td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.priorityNum}</td>
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{task.completion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
