import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import moment from "moment";

const VideoCardUser = ({ video, index }) => {
  return (
    <div className="flex gap-4 py-3 hover:bg-zinc-900 px-2 rounded-lg">
      {/* Index (optional) */}
      {index !== undefined && (
        <span className="w-6 text-sm text-zinc-400 pt-6">
          {index + 1}
        </span>
      )}

      {/* Thumbnail */}
      <Link to={`/watch/${video._id}`} className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-24 w-40 rounded-lg object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black/80 text-xs text-white px-1.5 rounded">
          {Math.floor(video.duration)}s
        </span>
      </Link>

      {/* Info */}
      <div className="flex flex-1 justify-between gap-2">
        <div className="space-y-1">
          <Link
            to={`/watch/${video._id}`}
            className="text-sm font-semibold text-white line-clamp-2"
          >
            {video.title}
          </Link>

          <p className="text-xs text-zinc-400">
            {video.views} views • {moment(video.createdAt).fromNow()}
          </p>

          <p className="text-xs text-zinc-500 capitalize">
            {video.category}
          </p>
        </div>

        {/* Menu */}
        <button className="h-fit p-2 text-zinc-400 hover:text-white">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoCardUser;
