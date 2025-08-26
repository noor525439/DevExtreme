import React from "react";

const tasks = [
  {
    id: 1,
    subject: "Prepare 2013 Financial",
    status: "Completed",
    priority: "High",
    assignedTo: "Sandra Johnson",
    startDate: "2013-01-15",
    dueDate: "2013-01-31",
    priorityNum: 4,
    completion: 100,
  },
  {
    id: 2,
    subject: "Prepare 2013 Marketing Plan",
    status: "Completed",
    priority: "High",
    assignedTo: "Robert Reagan",
    startDate: "2013-01-01",
    dueDate: "2013-01-31",
    priorityNum: 4,
    completion: 100,
  },
  {
    id: 3,
    subject: "Update Personnel Files",
    status: "Completed",
    priority: "High",
    assignedTo: "Brittany Bright",
    startDate: "2013-02-03",
    dueDate: "2013-02-28",
    priorityNum: 3,
    completion: 100,
  },
  {
    id: 4,
    subject: "Review Health Insurance",
    status: "In Progress",
    priority: "High",
    assignedTo: "Samnathra Bright",
    startDate: "2013-02-12",
    dueDate: "2013-04-25",
    priorityNum: 2,
    completion: 50,
  },
  {
    id: 5,
    subject: "Choose between PPO a...",
    status: "In Progress",
    priority: "High",
    assignedTo: "John Heart",
    startDate: "2013-02-16",
    dueDate: "2013-04-25",
    priorityNum: 4,
    completion: 75,
  },
  {
    id: 6,
    subject: "Google AdWords Strate...",
    status: "Completed",
    priority: "High",
    assignedTo: "John Heart",
    startDate: "2013-02-27",
    dueDate: "2013-04-25",
    priorityNum: 4,
    completion: 100,
  },
  {
    id: 7,
    subject: "New Brochures",
    status: "In Progress",
    priority: "Normal",
    assignedTo: "John Heart",
    startDate: "2014-05-23",
    dueDate: "2013-12-25",
    priorityNum: 2,
    completion: 100,
  },
  {
    id: 8,
    subject: "2013 Brochure Designs",
    status: "Completed",
    priority: "Urgent",
    assignedTo: "Morghan Kenedy",
    startDate: "2013-02-25",
    dueDate: "2013-04-27",
    priorityNum: 2,
    completion: 100,
  },
  {
    id: 9,
    subject: "2013 Brochure Designs",
    status: "Completed",
    priority: "Normal",
    assignedTo: "Voilet Baily",
    startDate: "2013-11-05",
    dueDate: "2013-06-27",
    priorityNum: 2,
    completion: 100,
  },
  {
    id: 10,
    subject: "Website Redesign Plan",
    status: "Completed",
    priority: "Urgent",
    assignedTo: "Voilet Baily",
    startDate: "2013-05-01",
    dueDate: "2013-02-24",
    priorityNum: 4,
    completion: 100,
  },
];

const Tasks = () => {
  return (
    <div className="flex-1 p-8 pb-1 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Tasks
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left bg-white dark:bg-gray-800 transition-colors duration-300">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Task Id</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Assigned to</th>
              <th className="px-4 py-3">Start date</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Priority num</th>
              <th className="px-4 py-3">Completion</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
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
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                  {task.assignedTo}
                </td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                  {task.startDate}
                </td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                  {task.dueDate}
                </td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                  {task.priorityNum}
                </td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                  {task.completion}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      
        
      </div>
      <footer className="text-center text-sm text-gray-500  dark:text-gray-400 bg-gray-100 dark:bg-gray-900  mt-9 pt-14 pb-3 rounded-lg transition-colors duration-300">
          <hr className="border-gray-300 dark:border-gray-600 mb-3" />
          <p className="text-start">
            ©2011-2025 DevExtreme App Inc.
          </p>
          <p className="text-start">
            All trademarks or registered trademarks are property of their respective owners.
          </p>
        </footer>
    </div>
  );
};

export default Tasks;
