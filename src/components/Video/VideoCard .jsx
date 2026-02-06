import React from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useAppContext } from '../../AppContex';
 
 

 const VideoCard = ({video}) => {

  const{navigate,token ,axios} = useAppContext()
  
  const {title ,thumbnail ,views ,createdAt ,_id} = video





const redirect = ()=>{
navigate(`/watch/${_id}`)
}


const handleClick = () => {
   redirect();
 
 
};





  return (
    <div   onClick={handleClick}  
      className=" cursor-pointer rounded-xl  p-2 -m-2 transition hover:bg-white/5 group" >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-slate-800">
        <img src={thumbnail} alt={video.title} className=" w-full h-full object-cover transition-transform duration-300 ease-out
        group-hover:scale-[1.03] "/>
      </div>

      {/* Text */}
      <div className="mt-2">
        <h3 className="text-sm font-medium leading-[1.25rem] line-clamp-2 min-h-[2.5rem]" >
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {views} views • {moment(createdAt).format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
