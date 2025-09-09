import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';


const Layout = () => {
   const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const handleMenuClick = (menuName) => {
    if (!tabs.includes(menuName)) {
      setTabs([...tabs, menuName]);
    }
    setActiveTab(menuName);
  };

   const handleRemoveTab = (menuName) => {
    const newTabs = tabs.filter((tab) => tab !== menuName);
    setTabs(newTabs);

    if (activeTab === menuName) {
      setActiveTab(newTabs.length > 0 ? newTabs[0] : null);
    }
  };
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