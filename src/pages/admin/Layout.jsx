import React, { useState } from "react";
import AdminSidebar from "../../components/Video/AdminSidebar";
import Navbar from "../../components/Video/Navbar";
import { Outlet } from "react-router-dom";
 
 
 

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
    <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1  ">
       
        <AdminSidebar isOpen={isSidebarOpen} />
        <Outlet/>


  
        
      </div>
    </div>
  );
};

export default Layout;
