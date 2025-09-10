import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';


const Layout = () => {
  return (
    <div>
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