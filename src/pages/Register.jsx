import React, { useState } from "react";
import { useAppContext } from "../AppContex";
import toast from "react-hot-toast";

const Register = () => {

  const[name,setName] =useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const{axios,navigate} =useAppContext();


 
  const submitHandler= async(e)=>{
 e.preventDefault()
 try {

       const{data}= await axios.post('/api/user/register',{name,email,password})
       if(data.success){
        toast.success(data.message)}
        setName('')
        setEmail('')
        setPassword('')
        setTimeout(() => {
          navigate('/login')
        },  1500);
      }catch (error) {
  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}

  }


  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      
      {/* Card */}
      <div
        className="
          w-full max-w-md
          bg-slate-900
          rounded-2xl
          shadow-2xl
          p-6 sm:p-8
          border border-slate-800

          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-600
          hover:shadow-blue-500/20
          focus-within:border-blue-600
          focus-within:shadow-blue-500/30
        "
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <img
          onClick={()=>{navigate('/')}}
            src="./WeTube.png"
            alt="WeTube"
            className="
             cursor-pointer
              w-32 sm:w-40
              h-auto
              mb-4
              object-contain
              drop-shadow-xl
            "
          />

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Register to WeTube
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Watch · Connect · Enjoy
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={submitHandler}>
          
          {/* Name */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Name
            </label>
            <input onChange={(e)=>setName(e.target.value)}
            value={name}
              type="text"
              placeholder="Enter your name"
              required
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

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Email
            </label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="Enter your email"
              required
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
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Password
            </label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="Enter your password"
              required
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

          {/* Register Button */}
          <button
            type="submit"
            className="
              w-full
              mt-4
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
            Register
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-slate-400 mt-4">
            Already have an account?
            <span
              className="
                ml-1
                text-blue-500
                hover:text-blue-400
                hover:underline
                cursor-pointer
                transition
              "
              onClick={()=>{navigate('/login')}}
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
