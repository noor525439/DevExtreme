import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

const Layout = () => {
  return (
    <div className='flex bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Navbar/>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  </Router>
);

export default App;