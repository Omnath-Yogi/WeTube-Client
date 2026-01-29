import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext()

export const AppProvidder = ({ children }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [videos, setVideos] = useState([]);
    const [input, setInput] = useState("")

     const fetchVideo= async () => {
        try {
            const { data } = await axios.get('/api/video/all');
            data.success ? setVideos(data.allVideo) : toast.error(data.message)
        } catch (error) {
            toast.error(data.message)
        }
    }
    useEffect(()=>{
        fetchVideo();     
        const token = localStorage.getItem('token')
        if(token){
            setToken(token)
            axios.defaults.headers.common['Authorization']= `${token}`;
        }

    },[])

    const value = {
        axios, navigate, token, setToken, videos, setVideos, input, setInput
    }

    return (
        <AppContext.Provider value={value}  >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
