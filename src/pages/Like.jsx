import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import { useAppContext } from '../AppContex';
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


  return (
  <div>
      <h1>Liked Videos</h1>
      {likedVideos.length === 0 ? (
        <p>No liked videos yet.</p>
      ) : (
        <ul>
          {likedVideos.map((video) => (
            <li key={video.id}>
              <h2>{video.title}</h2> {/* Adjust based on your video object structure */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Like