import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Watch from './pages/Watch'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './pages/admin/Layout'
// import AddVideo from './pages/admin/AddVideo'
import Dashboard from './pages/admin/Dashboard'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './AppContex'
import Comments from './pages/admin/Comments'
import VideoList from './pages/admin/VideoList'
import AddVideo from './pages/admin/AddVideo.jsx'
import ProtectedAdminRoute from './components/Admin/ProtectedAdminRoute.jsx'
import Like from './pages/Like.jsx'
import WatchHistory from './pages/WatchHistory.jsx'
import Profile from './pages/Profile.jsx'
import LayoutHome from './components/User/LayoutHome.jsx'

const App = () => {
  const{token} =useAppContext()
  return (
    <div> 
      <Toaster/>
      <Routes>
  

          
        <Route path='/' element={<Home/>}/>
        <Route path='/watch/:_id' element={ <Watch/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>



        <Route element={<ProtectedAdminRoute />}>
        <Route path='/admin' element={token?<Layout/>:<Login/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add' element={<AddVideo/> }/>
        <Route path='comments' element={<Comments/>}/>
        <Route path='videos' element={<VideoList/>}/>
        </Route>
        </Route>


        
        <Route path='/user' element={token?<LayoutHome/>:<Login/>}>
        <Route index element={<Profile/>}/>
        <Route path='like' element={<Like/>} />
        <Route path='history' element={<WatchHistory/>}/>
        </Route>


       </Routes>
    </div>
    )}

export default App