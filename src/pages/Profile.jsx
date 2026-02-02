import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContex";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

const Profile = () => {
  const { axios, token } = useAppContext();

  const decoded = jwtDecode(token);
  const userId = decoded.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [likes, setLikes] = useState(0);
  const [history, setHistory] = useState(0);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.post(`/api/user/${userId}`);
        const info = res.data.infomation;

        setName(info.name);
        setEmail(info.email);
        setLikes(info.likes.length);
        setHistory(info.watchHistory.length);
        setCreatedAt(info.createdAt);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, [userId, axios]);

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Header */}
      <div className="flex items-center gap-6 mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
          {name?.charAt(0)}
        </div>

        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-400">{email}</p>
          <p className="text-sm text-gray-500 mt-1">
            Joined {moment(createdAt).format("MMMM YYYY")}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <p className="text-3xl font-bold">{history}</p>
          <p className="text-gray-400 mt-1">Videos Watched</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <p className="text-3xl font-bold">{likes}</p>
          <p className="text-gray-400 mt-1">Videos Liked</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-400 mt-1">Playlists</p>
        </div>

      </div>

      {/* Account Information */}
      <div className="bg-gray-900 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-semibold mb-4">Account Information</h2>

        <div className="space-y-3 text-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-400">Username</span>
            <span>{name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Email</span>
            <span>{email}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Account Type</span>
            <span>User</span>
          </div>
        </div>
      </div>

      {/* Fictional Actions */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
          Edit Profile
        </button>

        <button className="px-6 py-2 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition">
          Logout
        </button>
      </div>

    </div>
  );
};

export default Profile;
