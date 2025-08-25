import React from 'react'
import Profile from './Components/Profile'
import Tasks from './Components/Tasks'
import Navbar from './Components/Navbar'



const App = () => {
  return (
    <div className=' bg-white text-black dark:bg-gray-900 dark:text-white '>
       <Navbar/>
      <Profile/>
      <Tasks/>
    
    </div>
  )
}

export default App
