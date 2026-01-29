import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleComments = showAll ? comments : comments.slice(0, 1);

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-6 text-white">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold">
          {comments.length} Comments
        </h2>

        {comments.length > 1 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-gray-400 hover:text-white"
          >
            {showAll ? "Hide comments" : "Show all comments"}
          </button>
        )}
      </div>

      {/* ADD COMMENT */}
      <div className="flex gap-3 mb-6">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />

        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-1 text-sm"
          />

          <div className="flex justify-end gap-2 mt-2">
            <button className="px-4 py-1 rounded-full text-sm text-gray-300 hover:bg-[#272727]">
              Cancel
            </button>
            <button className="px-4 py-1 rounded-full text-sm bg-[#272727] hover:bg-[#3f3f3f]">
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* COMMENTS LIST */}
      <div className="space-y-4">
        {visibleComments.map((item, index) => (
          <div key={index} className="flex gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-gray-200">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
