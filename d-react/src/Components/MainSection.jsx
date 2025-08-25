import React, { useState } from "react";
import { Home,Folder,ChevronRight} from "lucide-react";

const MainSection = ({extended,setExtended}) => {
  
  const [display,setDisplay] = useState(false)
  



  return (      
    
    <div className="flex justify-around h-screen w-screen resize-none">
      {/*sidebar*/}
             <aside
  className={`min-h-screen bg-white dark:bg-gray-900 shadow-md transition-all duration-300 
  ${extended ? "w-64" : "w-20"}`}
>
  <div className="flex items-center justify-between  border-b border-gray-300 shadow-lg">
    
  </div>

  <nav className="flex flex-col p-4 space-y-2">
    <div className="flex items-center gap-2">
      {extended ? (
        <a
          href="#"
          className="flex items-center gap-2 font-semibold hover:bg-gray-200 hover:w-80 dark:hover:bg-gray-700 p-2 rounded"
        >
          <Home size={24} /> Home
        </a>
      ) : (
        <Home className="my-2 mx-1.5" size={21} />
      )}
    </div>

    <div>
      {extended ? (
        <a
          href="#"
          className="flex items-center gap-2 p-2 font-semibold rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Folder size={24} /> Examples
          <ChevronRight
            className="ml-22"
            size={16}
            onClick={() => setDisplay(!display)}
          />
        </a>
      ) : (
        <Folder className="my-2 mx-1.5" size={21} />
      )}

      {display && extended && (
        <div>
          <a
            href="#"
            className="block px-8 py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-8 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Tasks
          </a>
        </div>
      )}
    </div>
  </nav></aside>
                
  
      
          <main className="flex-1 bg-gray-100 ">
  
      
        <div className="flex items-center bg-white justify-end space-x-4  shadow-md px-3">
    
    
      </div>

      
      <div className="bg-gray-100">
      <h1 className="mx-6 text-3xl font-semibold p-3">Home</h1>
      <div className="bg-white  shadow-lg rounded-lg p-5 mx-6">
        <div className="flex items-center space-x-3 mb-4">
          <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JS" className="h-10" />
          <span className="text-3xl text-gray-600 font-bold">DevExtreme <p className="text-gray-300 text-xl">By DevExpress</p></span>
          <span className="text-2xl text-gray-500 font-bold">+</span>
          <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-10"></img>
          <span className="text-3xl text-blue-400 font-bold">React</span>
        </div>
        <p className="mb-4 ">Thanks for using the DevExtreme React App Template.</p>
        <p className="mb-4 ">This website was built using {""}
          <a href="#" className="text-blue-600 hover:underline">Create React App
            </a> and{""}
             <a href="#" className="text-blue-600 hover:underline"> Dev Extreme CLI 
            </a> {""}
              and includes the 
          following components:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>
            <a href="#" className="text-blue-600 hover:underline">Data Grid</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Form</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Drawer</a>
          </li>
        </ul>
        <p className="mb-4">To customize your DevExtreme React Application further,please refer to the following help topics:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
           <li>
            <a href="#" className="text-blue-600 hover:underline">Layout</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Add a new view</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Configure the Navigation Menu</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Configure Themes</a>
          </li>

        </ul>
        <p>For technical content related to DevExtreme React components, feel free to explore our {""}
          <a href="#" className="text-blue-600 hover:underline">online documentation </a>{""}
           and{""} 
          <a href="#" className="text-blue-600 hover:underline"> technical demos</a>.
        </p>
      </div>
    </div>

  
      
       <footer className=" text-center tet-sm text-gray-500 bg-gray-100 mt-6 pt-32">
        <hr />
       <p className="text-start">@2011-2025 DevExtreme App Inc.
       </p>
      
        <p className="text-start"> All trademarks or registered trademarks are property of their respective owners.</p>
       </footer>
          </main>
    </div>
   
  );
};

export default MainSection;
