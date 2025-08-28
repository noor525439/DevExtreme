import React from "react";

const Main = () => {
  return (
    <div className="flex justify-around h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">

      
        <div className="bg-gray-100  dark:bg-gray-900 ">
          <h1 className="mx-6 text-3xl font-semibold p-3">Home</h1>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 mx-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JS" className="h-10" />
              <span className="text-3xl text-gray-600 dark:text-gray-300 font-bold">
                DevExtreme 
                <p className="text-gray-400 dark:text-gray-500 text-xl">By DevExpress</p>
              </span>
              <span className="text-2xl text-gray-500 dark:text-gray-400 font-bold">+</span>
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-10" />
              <span className="text-3xl text-blue-400 font-bold">React</span>
            </div>

            <p className="mb-4">Thanks for using the DevExtreme React App Template.</p>
            <p className="mb-4">
              This website was built using {" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Create React App</a> and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">DevExtreme CLI</a>{" "}
              and includes the following components:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Data Grid</a></li>
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Form</a></li>
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Drawer</a></li>
            </ul>

            <p className="mb-4">To customize your DevExtreme React Application further, please refer to the following help topics:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Layout</a></li>
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Add a new view</a></li>
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Configure the Navigation Menu</a></li>
              <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Configure Themes</a></li>
            </ul>

            <p>
              For technical content related to DevExtreme React components, feel free to explore our{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">online documentation</a> and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">technical demos</a>.
            </p>
          </div>
        </div>

        
        <footer className="text-start text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 mt-6 pt-32 px-6">
          <hr className="border-gray-300 dark:border-gray-700 mb-2" />
          <p> ©2011-2025 DevExtreme App Inc.</p>
          <p>All trademarks or registered trademarks are property of their respective owners.</p>
        </footer>
      </main>
    </div>
  );
};

export default Main;
