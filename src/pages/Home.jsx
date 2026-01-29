import React, { useState } from "react";
import Navbar from "../components/Video/Navbar";
import Sidebar from "../components/Video/Sidebar";
import CategoryBar from "../components/Video/CategoryBar";
import VideoGrid from "../components/Video/VideoGrid";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      
      {/* Navbar */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Category Bar */}
          <CategoryBar />

          {/* Video Grid */}
          <main className="flex-1 overflow-y-auto p-4">
            <VideoGrid />
          </main>


  
        </div>
      </div>
    </div>
  );
};

export default Home;
