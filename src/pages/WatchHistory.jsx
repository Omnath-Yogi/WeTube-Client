import React from 'react'

const WatchHistory = () => {
  return (
     <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Watch History</h1>
        <p className="text-gray-400 mt-1">
          Videos you have watched recently
        </p>
      </div>

      {/* Video List */}
      <div className="space-y-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex gap-4 bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="w-48 h-28 bg-gray-700 rounded-lg"></div>

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold line-clamp-2">
                  Sample Video Title Goes Here
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Channel Name • 1.2M views
                </p>
              </div>

              <p className="text-xs text-gray-500">
                Watched 2 days ago
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* Empty State (for later use) */}
      {/* 
      <div className="text-center text-gray-500 mt-20">
        No watch history yet
      </div> 
      */}
    </div>
  )
}

export default WatchHistory