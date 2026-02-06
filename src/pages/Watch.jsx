import React, { useEffect, useState } from "react";
import Navbar from "../components/Video/Navbar";
import Feed from "../components/Video/Feed";
import CommentSection from "../components/Video/CommentSection";
import VideoPlayer from "../components/Video/VideoPlayer";
import {   comments } from "../assets/assets";
import { useParams } from "react-router-dom";
import { useAppContext } from "../AppContex";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";



const Watch = () => {


const {_id}= useParams();
const [videoData,setVideoData] = useState([])
const{axios,token} = useAppContext();


const fetchVideoData = async ()=>{
  const {data} = await axios.get(`/api/video/${_id}`)
  setVideoData(data.video)
}
console.log(videoData)

useEffect(()=>{
fetchVideoData();
},[_id])





useEffect(()=>{

  
const updateViews = async () => {
  setTimeout(async () => {
    try {
      await axios.post('/api/video/viewInc', {
        videoId: _id
      });
    } catch (error) {
      console.error("View increment failed", error);
    }
  }, 10000);  
};


const updateHistory = async()=>{
  if(!token) return
  try {
     const decoded = jwtDecode(token);
     const  Id = decoded.id;

     await axios.post('/api/user/historyUpdate',{  videoId:_id, userId:Id});

    
  } catch (error) {
    toast.error(error)
  }





}














updateHistory()
updateViews()

},[_id])






  return (
    <div className="w-full overflow-x-hidden">
     <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      {/* MOBILE SAFE CONTAINER */}
      <div className="w-full px-3 sm:px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT */}
          <div className="flex flex-col w-full min-w-0">
            <VideoPlayer videoData={videoData} />
            <CommentSection comments={comments} />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[380px] shrink-0">
            <Feed currentVideoId={videoData._id} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Watch;
