import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../AppContex";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { axios,navigate, setToken } = useAppContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
  
      const { data } = await axios.post('/api/user/login', { email, password })
     if (data.success) {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = data.token;

         const decoded = jwtDecode(data.token);
         

         if(decoded.role==="user"){
          navigate('/')
         }else if(decoded.role==="admin"){
        navigate('/admin')
         }
         

 } else {
        toast.error(data.message)
      }
    }catch (error) {
  const message =
    error.response?.data?.message || "Something went wrong";

  toast.error(message);
}
  }


  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">

      {/* Card */}
      <div className="
        w-full max-w-md
        bg-slate-900
        rounded-2xl
        shadow-2xl
        p-6 sm:p-8
        border border-slate-800
         
            transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-blue-500/20
    hover:border-blue-600
      ">
         {/* Card */}




        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <img
          onClick={()=>{navigate('/')}}
            src="./WeTube.png"
            alt="WeTube"
            className="
           
    w-32 sm:w-40
    h-auto
    mb-4
    object-contain
    drop-shadow-xl
        cursor-pointer
  "
          />

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Login to WeTube
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Watch. Upload. Connect.
          </p>
        </div>
          {/* Header */}



       <form action=""  onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">
            Email
          </label>
          <input
          onChange={e=>setEmail(e.target.value)} value={email} required
            type="email"
            placeholder="you@example.com"
            className="
              w-full
              px-4 py-2.5
              rounded-lg
              bg-slate-800
              text-white
              placeholder-slate-500
              border border-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />
        </div>





 {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-slate-400 mb-1">
            Password
          </label>
          <input
          onChange={e=>setPassword(e.target.value)} value={password}  required 
            type="password"
            placeholder="••••••••"
            className="
              w-full
              px-4 py-2.5
              rounded-lg
              bg-slate-800
              text-white
              placeholder-slate-500
              border border-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />
        </div>







 {/* Login Button */}
        <button
       type='submit' 
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            hover:shadow-lg hover:shadow-blue-600/30
            active:scale-[0.98]
            transition-all duration-200
            text-white
            font-semibold
            py-2.5
            rounded-lg
                cursor-pointer
          "
        >
          Login
        </button>


















 {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-400">
          Don’t have an account?
          <span onClick={()=>{navigate('/register')}} className="ml-1 text-blue-500
              hover:text-blue-400
              hover:underline
              cursor-pointer
              transition
            "
          >
            Register
          </span>
        </div>


















       </form>
       
       
        
      </div>
    </div>
  );
};

export default Login;
