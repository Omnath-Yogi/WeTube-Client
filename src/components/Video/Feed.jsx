import React from "react";
import VideoCard from "./VideoCard ";
import { useAppContext } from "../../AppContex";

const Feed = ({ currentVideoId }) => {
  const { videos } = useAppContext();

  const filteredVideos = videos.filter(
    (video) => video._id !== currentVideoId
  );

  return (
    <div className="grid grid-cols-1 gap-4 w-[380px] shrink-0">
      <h1 className="border">Watch More...</h1>

      {filteredVideos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Feed;
