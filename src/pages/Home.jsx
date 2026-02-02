import React from "react";
import CategoryBar from "../components/Video/CategoryBar";
import VideoGrid from "../components/Video/VideoGrid";
import LayoutHome from "../components/User/LayoutHome";

const Home = () => {
  return (
    <LayoutHome>
      <CategoryBar />
      <main className="p-4">
        <VideoGrid />
      </main>
    </LayoutHome>
  );
};

export default Home;
