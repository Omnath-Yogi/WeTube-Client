import React from 'react'
import { assets } from '../../assets/assets'
import SidebarItem from './SidebarItem'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`
        h-screen flex flex-col py-2 px-2
          text-white
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-50" : "w-20"}
      `}
    >
         
       <NavLink to="/"   > <SidebarItem icon={assets.home} label="Home" isOpen={isOpen} />      </NavLink>
       <NavLink to="/user/like"> <SidebarItem icon={assets.like} label="Like" isOpen={isOpen} />      </NavLink>
       <NavLink to="/user/history"> <SidebarItem icon={assets.history} label="History" isOpen={isOpen}/> </NavLink>
       <NavLink to="/user"> <SidebarItem icon={assets.profile} label="You" isOpen={isOpen} />    </NavLink>

    </div>
  )
}

export default Sidebar
