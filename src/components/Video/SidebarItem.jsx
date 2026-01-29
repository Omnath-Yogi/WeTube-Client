import React from 'react'
import { useAppContext } from '../../AppContex'

 
const SidebarItem = ({ icon, label, isOpen }) => {
  const {navigate}= useAppContext();
 const handleNavigate=async()=>{
     if(label==="Like"){
      navigate('/like')
     }
     else if(label==="Home"){
      navigate('/')
     }
     else  if(label==="You"){
      navigate('/user')
     }
     else  if(label==="History"){
      navigate('/history')
     }
  }
  return (
    <div onClick={handleNavigate}
      className={`
        flex items-center gap-3
        py-2 px-3 rounded-xl cursor-pointer
        hover:bg-white/10
        transition-all duration-200
        ${isOpen ? "justify-start" : "justify-center"}
      `}
    >
      <img className="w-7" src={icon} alt={label} />

      {isOpen && (
        <span className="text-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  )
}




export default SidebarItem