import React from 'react'

const tasks= [{
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

];
const Tasks = () => {
  return (
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <div className='overflow-x-auto shadow-lg rounded-lg'>
        <table className='min-w-full text-sm text-left bg-white'>
          <thead className='bg-gray-100 text-gray-600 uppercase text-xs'>
            <tr>
              <th className='px-4 py-3 '>Task Id</th>
              <th className='px-4 py-3 '>Subject</th>
              <th className='px-4 py-3 '>Status</th>
              <th className='px-4 py-3 '>Priority</th>
              <th className='px-4 py-3 '>Assigned to</th>
              <th className='px-4 py-3 '>Start date</th>
              <th className='px-4 py-3 '>Due Date</th>
              <th className='px-4 py-3 '>Priority num</th>
              <th className='px-4 py-3 '>Completion</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task)=>(
              <tr key={task.id} className='border-b border-b-gray-300 hover:bg-gray-50'>
                <td className='px-4 py-2'>{task.id}</td>
                <td className='px-4 py-2'>{task.subject}</td>
                <td className='px-4 py-2'>{task.status}</td>
                <td className='px-4 py-2'>{task.priority}</td>
                <td className='px-4 py-2'>{task.assignedTo}</td>
                <td className='px-4 py-2'>{task.startDate}</td>
                <td className='px-4 py-2'>{task.dueDate}</td>
                <td className='px-4 py-2'>{task.priorityNum}</td>
                <td className='px-4 py-2'>{task.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer className=" text-center tet-sm text-gray-500 bg-gray-100 mt-6 pt-32">
        <hr />
       <p className="text-start">@2011-2025 DevExtreme App Inc.
       </p>
      
        <p className="text-start"> All trademarks or registered trademarks are property of their respective owners.</p>
       </footer>
      </div>
    </div>
  )
}

export default Tasks
