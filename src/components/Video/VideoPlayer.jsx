import React, { useState } from "react";
import moment from 'moment';
import {
  ThumbsUp,
  ThumbsDown,
  Share2
} from "lucide-react";

const VideoPlayer = ({ videoData }) => {
  console.log(videoData)
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full bg-black text-white flex flex-col items-center">

      {/* VIDEO */}
      <div className="w-full  border-2 max-w-[1280px] aspect-video max-h-[75vh] bg-black flex items-center justify-center">
        <video
          src={videoData.video}
          poster={videoData.thumbnail}
          controls
          autoPlay
          className="w-full  h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[1280px] px-4 mt-4">

        {/* TITLE */}
        <h1 className="text-xl font-semibold mb-2">
          {videoData.title}
        </h1>

        {/* ACTION BAR */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">

          {/* META */}
          <div className="text-sm text-gray-400">
            <span className="mr-2"> {videoData.views} views</span>
            <span>{moment(videoData.createdAt).format("MMMM D, YYYY")}</span>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#272727] hover:bg-[#3f3f3f]">
              <ThumbsUp size={18} />
              <span>Like</span>
            </button>

            <button className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#272727] hover:bg-[#3f3f3f]">
              <ThumbsDown size={18} />
              <span>Dislike</span>
            </button>

            <button className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#272727] hover:bg-[#3f3f3f]">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-[#272727] rounded-lg p-3 text-sm leading-relaxed">
          <p className={`${showMore ? "" : "line-clamp-3"}`}>
            {videoData.description}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-gray-300 font-medium hover:text-white"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default VideoPlayer;
