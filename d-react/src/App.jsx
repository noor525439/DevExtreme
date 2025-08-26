import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router} from "react-router-dom";




const App = () => {
  return (
    
      
    <Router>
        <div className='flex  bg-white text-black dark:bg-gray-900 dark:text-white '>
       <Navbar/>
     </div>
    </Router>    
    

  )
}

export default App
