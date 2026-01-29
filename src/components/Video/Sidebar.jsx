import React from 'react'
import { assets } from '../../assets/assets'
import SidebarItem from './SidebarItem'

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

      <SidebarItem icon={assets.home} label="Home" isOpen={isOpen} />
      <SidebarItem icon={assets.like} label="Like" isOpen={isOpen} />
      <SidebarItem icon={assets.history} label="History" isOpen={isOpen} />
      <SidebarItem icon={assets.profile} label="You" isOpen={isOpen} />

    </div>
  )
}

export default Sidebar
