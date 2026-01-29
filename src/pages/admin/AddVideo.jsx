import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../AppContex";
import toast from "react-hot-toast";

const AddVideo = () => {
  const{axios} = useAppContext()
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [progress, setProgress] = useState(0);




  const handleSubmit = async (e) => {
   try {

      e.preventDefault()
      setIsAdding(true)

        const details = {
        title,
        description,
        category,
        isPublished
      }

        const formData = new FormData();
         formData.append('details',JSON.stringify(details));
         formData.append('thumbnail',thumbnail);
         formData.append('video',video);
     
         const { data } = await axios.post('/api/admin/add', formData, {
  onUploadProgress: (progressEvent) => {
    const percent = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setProgress(percent);
  }
});


            if(data.success){
        toast.success(data.message);
         setThumbnail(null)
         setVideo(null)
        setTitle('')
        setDescription('')
        setCategory('')
      setIsPublished(false)
      }else{
        toast.error(data.message)
      }
    }catch (error) {
        toast.error(error.message)
    }finally{
      setProgress(0);

      setIsAdding(false)
    }
    
  }

 



  return (
    <div className="min-h-screen w-full px-6 lg:px-12 xl:px-20 py-10">
      <form className="w-full space-y-12" onSubmit={handleSubmit}>

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            Upload <span className="text-red-600">Video</span>
          </h1>
          <span className="text-sm text-gray-400">
            Admin • Content Studio
          </span>
        </div>

        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Thumbnail */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <p className="text-lg font-semibold text-white mb-3">Thumbnail</p>

            <label htmlFor="thumbnail">
              <div className="relative aspect-video w-full rounded-xl border-2 border-dashed border-white/20 hover:border-red-500 transition cursor-pointer overflow-hidden flex items-center justify-center">
                {!thumbnail ? (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <img
                      src={assets.imagUpload}
                      className="h-14 opacity-70"
                      alt="Upload thumbnail"
                    />
                    <span className="text-sm">Click to upload thumbnail</span>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(thumbnail)}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Thumbnail preview"
                  />
                )}
              </div>
            </label>

            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              hidden
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div>

          {/* Video */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <p className="text-lg font-semibold text-white mb-3">Video</p>

            <label htmlFor="video">
              <div className="relative aspect-video w-full rounded-xl border-2 border-dashed border-white/20 hover:border-red-500 transition cursor-pointer overflow-hidden flex items-center justify-center">
                {!video ? (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <img
                      src={assets.videoUpload}
                      className="h-14 opacity-70"
                      alt="Upload video"
                    />
                    <span className="text-sm">Click to upload video</span>
                  </div>
                ) : (
                  <video
                    src={URL.createObjectURL(video)}
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </label>

            <input
              type="file"
              id="video"
              accept="video/*"
              hidden
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 space-y-6">

          <div>
            <label className="text-sm text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your video a compelling title"
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />

          </div>

          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what this video is about"
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />

          </div>

          <div>
            <label className="text-sm text-gray-300">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Startup, Tech, Finance"
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />

          </div>

          {/* Publish Toggle */}
          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="font-medium text-white">Publish now</p>
              <p className="text-sm text-gray-400">
                Make this video live immediately
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsPublished(!isPublished)}
              className={`w-14 h-7 rounded-full relative transition ${isPublished ? "bg-green-500" : "bg-gray-500"
                }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${isPublished ? "translate-x-7" : ""
                  }`}
              />
            </button>
          </div>
        </div>
        
        {isAdding && (
  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
    <div
      className="h-full bg-red-600 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  </div>
)}

{isAdding && (
  <p className="text-sm text-gray-400 text-right">
    Uploading… {progress}%
  </p>
)}


        {/* Action */}
        <div className="flex justify-end">
          <button type='submit'
            className="px-10 py-3 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/30">
          {isAdding ? 'Uploading...' : 'Upload Video'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddVideo;
