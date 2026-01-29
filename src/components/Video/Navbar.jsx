import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../AppContex'
import { jwtDecode } from 'jwt-decode'

const Navbar = ({ toggleSidebar }) => {
    
   
        const{navigate,token,setToken} = useAppContext()

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
        <div className=' flex justify-between items-center px-2 py-2'>
            <div className='flex ' >
                <img onClick={toggleSidebar} className='w-10   hover:bg-white/10    rounded-xl  cursor-pointer gap-2' src={assets.menu} alt="" />
                <img  onClick={() => navigate("/")} className='h-16 cursor-pointer ' src="./WeTube.png" alt="" />
            </div>

            <div className='flex items-center w-full max-w-[600px]'>
                <input className='w-full h-10 px-4  border border-slate-700 rounded-l-full   text-sm
               bg-slate-800 text-white focus:outline-none focus:border-blue-500' type="text" placeholder="Search" />
                <button className='h-10 px-5 bg-slate-700 border border-l-0 border-slate-700  rounded-r-full hover:bg-slate-600 transition cursor-pointer'><img className="w-10 " src={assets.search} alt="" /></button>
                <button className=' cursor-pointer ml-3 p-2  bg-slate-800  rounded-full  hover:bg-slate-700 transition"'><img className='w-10' src={assets.mic} alt=""/></button>
            </div>


              {/* Admin dashboard button (only on explore/home) */}
        {token && role === "admin" && location.pathname === "/" && (
          <button
            onClick={() => navigate("/admin")}
            className="border h-10 px-5 rounded-full text-white cursor-pointer hover:bg-slate-700"
          >
            Dashboard
          </button>
        )}



  {/* Login / Logout */}
        {!token ? (
          <button
            onClick={() => navigate("/login")}
            className="border h-10 px-5  cursor-pointer rounded-full text-white hover:bg-slate-700"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="border cursor-pointer h-10 px-5 rounded-full text-white hover:bg-red-600"
          >
            Logout
          </button>
        )}





        </div>
    )
}

export default Navbar