import React from 'react'
import { assets } from '../../assets/assets'
import SidebarItem from './SidebarItem'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed md:relative
        h-screen flex flex-col py-2 px-2 text-white bg-slate-900 md:bg-transparent
        transition-all duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0 w-50" : "-translate-x-full md:translate-x-0 md:w-20"}
      `}>
        <NavLink to="/" onClick={() => window.innerWidth < 768 && onClose()}>
          <SidebarItem icon={assets.home} label="Home" isOpen={isOpen} />
        </NavLink>
        <NavLink to="/user/like" onClick={() => window.innerWidth < 768 && onClose()}>
          <SidebarItem icon={assets.like} label="Like" isOpen={isOpen} />
        </NavLink>
        <NavLink to="/user/history" onClick={() => window.innerWidth < 768 && onClose()}>
          <SidebarItem icon={assets.history} label="History" isOpen={isOpen}/>
        </NavLink>
        <NavLink to="/user" onClick={() => window.innerWidth < 768 && onClose()}>
          <SidebarItem icon={assets.profile} label="You" isOpen={isOpen} />
        </NavLink>
      </div>
    </>
  )
}

export default Sidebar