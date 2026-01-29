import React from "react";
import SidebarItem from "./SidebarItem";
import { LayoutDashboard, List, MessageCircle, Plus } from "lucide-react";
import AdminSidebarItem from "./AdminSidebarItem";
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ isOpen }) => {
  return (
    <div
      className={`
        h-screen flex flex-col py-2 px-2 text-white
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-52" : "w-20"}
      `}
    >



      <NavLink to="/admin">
        <AdminSidebarItem
          icon={<LayoutDashboard size={22} className="text-white" />}
          label="Dashboard"

          isOpen={isOpen}
        />
      </NavLink>




      <NavLink to="/admin/add">
        <AdminSidebarItem
          icon={<Plus size={22} className="text-white" />}
          label="Upload Video"

          isOpen={isOpen}
        />
      </NavLink>


      <NavLink to="/admin/videos">
        <AdminSidebarItem
          icon={<List size={22} className="text-white" />}
          label="All Videos"

          isOpen={isOpen}
        />
      </NavLink>




      <NavLink to="/admin/comments">
        <AdminSidebarItem
          icon={<MessageCircle size={22} className="text-white" />}
          label="Comments"

          isOpen={isOpen}
        />
      </NavLink>





    </div>
  );
};

export default AdminSidebar;
