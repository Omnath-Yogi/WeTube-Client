import React from "react";

const Like = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Liked Videos</h1>
        <p className="text-gray-400 mt-1">
          Videos you have liked
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-900 rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="w-full h-44 bg-gray-700"></div>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-semibold text-sm line-clamp-2">
                Sample Liked Video Title
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Channel Name
              </p>
              <p className="text-xs text-gray-500 mt-1">
                320K views • 3 days ago
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* Empty State (optional later) */}
      {/* 
      <div className="text-center text-gray-500 mt-20">
        No liked videos yet
      </div> 
      */}
    </div>
  );
};

export default Like;
