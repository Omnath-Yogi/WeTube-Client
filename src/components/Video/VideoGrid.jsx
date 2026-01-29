import React, { useState } from 'react'
import { videos as defaultVideos } from '../../assets/assets'
import VideoCard from './VideoCard '
import { useAppContext } from '../../AppContex'


const VideoGrid = ( ) => {
  
  const{videos,input} = useAppContext();
   
  return (
    <div className="
        grid
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4
      "
    >
      {videos.map((video) => (

    <VideoCard  key={video.id} video={video}/>
        
      ))}
    </div>
  )
}

export default VideoGrid