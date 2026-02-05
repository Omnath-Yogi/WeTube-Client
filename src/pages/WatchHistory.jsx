import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import { useAppContext } from '../AppContex';
const watchHistory = () => {

   const { axios, token } =  useAppContext()
  const[watchedVideos,setWatchedVideos] = useState([]);

  useEffect(()=>{

    if(!token) return

    const decoded = jwtDecode(token);
      const  Id = decoded.id;
      console.log(Id)

      const fetchLiked = async () => {
 
        const {data} = await axios.post('/api/video/historyVideoBy-Ids',{ userId:Id})
        console.log(data)
        setWatchedVideos(data.videos) 
      };
     fetchLiked();
 },[token,axios,setWatchedVideos])
 
useEffect(() => {
  console.log("likedVideos:", watchedVideos);
}, [watchedVideos]);


  return (
  <div>
      <h1>Watched  Videos</h1>
      {watchedVideos.length === 0 ? (
        <p>No Watched videos yet.</p>
      ) : (
        <ul>
          {watchedVideos.map((video) => (
            <li key={video.id}>
              <h2>{video.title}</h2> {/* Adjust based on your video object structure */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default watchHistory