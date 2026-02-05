import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import { useAppContext } from '../AppContex';
import VideoCard from '../components/Video/VideoCard ';
import VideoCardUser from '../components/User/VideoCardUser';
import moment from 'moment';
import { Play, Shuffle } from "lucide-react";
const Like = () => {

   const { axios, token } =  useAppContext()
  const[likedVideos,setLikedVideos] = useState([]);

  useEffect(()=>{

    if(!token) return

    const decoded = jwtDecode(token);
      const  Id = decoded.id;
      console.log(Id)

      const fetchLiked = async () => {
 
        const {data} = await axios.post('/api/video/videoBy-Ids',{ userId:Id})
        console.log(data)
        setLikedVideos(data.videos) 
      };
     fetchLiked();
 },[token,axios,setLikedVideos])
 
useEffect(() => {
  console.log("likedVideos:", likedVideos);
}, [likedVideos]);



if (likedVideos.length === 0) {
  return <p className="text-white px-6 py-4">No video yet</p>;
}

  return (
  <div className="flex flex-col lg:flex-row gap-6 px-3 sm:px-6 py-4 text-white">
    
    {/* LEFT PANEL */}
   <div className="
  w-full lg:w-80 shrink-0 rounded-2xl p-4
  bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-black
  border border-white/5
  shadow-lg shadow-black/40
  backdrop-blur-sm
">

      <img
        src={likedVideos[0]?.thumbnail}
        alt="Liked Videos"
        className="mb-4 h-44 w-full rounded-lg object-cover"
      />

      <h2 className="text-xl font-bold">Liked videos</h2>

      <p className="mt-1 text-sm text-zinc-400">
        OMNATH YOGI
      </p>

      <p className="text-xs text-zinc-500">
        {likedVideos.length} videos • No views • Updated{" "}
        {moment().format("MMM DD, YYYY")}
      </p>

      <div className="mt-4 flex gap-3">
        <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black text-sm font-semibold">
          <Play size={16} />
          Play all
        </button>

        <button className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-sm">
          <Shuffle size={16} />
          Shuffle
        </button>
      </div>
    </div>

    {/* RIGHT PANEL */}
    <div className="flex-1">
      {/* Filters */}
      <div className="mb-4 flex gap-2 overflow-x-auto">
        {["All", "Videos", "Shorts"].map((tab) => (
          <button
            key={tab}
            className="shrink-0 rounded-full bg-zinc-800 px-4 py-1 text-sm hover:bg-zinc-700"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video List */}
      <div>
        {likedVideos.map((video, index) => (
          <VideoCardUser
            key={video._id}
            video={video}
            index={index}
          />
        ))}
      </div>
    </div>
  </div>
);

}

export default Like