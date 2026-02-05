import React, { useState } from "react";
import Navbar from "../Video/Navbar";
import Sidebar from "../Video/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutHome = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;