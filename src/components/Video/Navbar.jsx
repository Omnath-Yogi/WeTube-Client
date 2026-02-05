import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../AppContex'
import { jwtDecode } from 'jwt-decode'
import { MoveLeft } from 'lucide-react'

const Navbar = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false)
  const { navigate, token, setToken } = useAppContext()
  
  let role = null
  if (token) {
    try {
      role = jwtDecode(token)?.role
    } catch (err) {
      role = null
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(null)
    navigate("/")
  }

  return (
    <div className='flex justify-between items-center px-2 py-2'>
      {/* Left section - Menu & Logo */}
      {!showSearch && (
        <div className='flex items-center'>
          <img 
            onClick={toggleSidebar} 
            className='w-10 hover:bg-white/10 rounded-xl cursor-pointer' 
            src={assets.menu} 
            alt="" 
          />
          <img 
            onClick={() => navigate("/")} 
            className='h-16 cursor-pointer' 
            src="/WeTube.png" 
            alt="" 
          />
        </div>
      )}

      {/* Search section */}
      <div className={`flex items-center ${showSearch ? 'flex-1' : 'flex-1 max-w-[600px]'} ${showSearch ? '' : 'hidden md:flex'}`}>
        {showSearch && (
          <button 
            onClick={() => setShowSearch(false)}
            className='md:hidden mr-2 p-2'
          >
            <MoveLeft className='w-6 h-6 text-white' />
          </button>
        )}
        <input 
          className='w-full h-10 px-4 border border-slate-700 rounded-l-full text-sm bg-slate-800 text-white focus:outline-none focus:border-blue-500' 
          type="text" 
          placeholder="Search" 
        />
        <button className='h-10 px-5 bg-slate-700 border border-l-0 border-slate-700 rounded-r-full hover:bg-slate-600 transition cursor-pointer'>
          <img className="w-10" src={assets.search} alt="" />
        </button>
        <button className='hidden md:block cursor-pointer ml-3 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition'>
          <img className='w-10' src={assets.mic} alt=""/>
        </button>
      </div>

      {/* Right section */}
      {!showSearch && (
        <div className='flex items-center gap-2'>
          {/* Search icon (mobile only) */}
          <button 
            onClick={() => setShowSearch(true)}
            className='md:hidden p-2 hover:bg-white/10 rounded-full'
          >
            <img className='w-6' src={assets.search} alt="" />
          </button>

          {/* Admin dashboard button */}
          {token && role === "admin" && location.pathname === "/" && (
            <button 
              onClick={() => navigate("/admin")} 
              className="hidden sm:block border h-10 px-5 rounded-full text-white cursor-pointer hover:bg-slate-700"
            >
              Dashboard
            </button>
          )}

          {/* Login / Logout */}
          {!token ? (
            <button 
              onClick={() => navigate("/login")} 
              className="border h-10 px-3 sm:px-5 cursor-pointer rounded-full text-white hover:bg-slate-700 text-sm"
            >
              Login
            </button>
          ) : (
            <button 
              onClick={handleLogout} 
              className="border cursor-pointer h-10 px-3 sm:px-5 rounded-full text-white hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar