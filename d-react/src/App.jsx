import React from 'react'
import Profile from './Components/Profile'
import Tasks from './Components/Tasks'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    
      
    <Router>
        <div className=' bg-white text-black dark:bg-gray-900 dark:text-white '>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Navbar/>}></Route>
           <Route path='/profile' element={<Profile/>}></Route>
           <Route path='/Tasks' element={<Tasks/>}></Route>
       </Routes>
     </div>
    </Router>    
    

  )
}

export default App
