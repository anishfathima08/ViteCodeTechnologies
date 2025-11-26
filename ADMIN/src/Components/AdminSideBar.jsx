import React from "react";
import { NavLink } from "react-router-dom";
import { MdLibraryBooks, MdLaptop, MdFormatListBulleted, MdAssignment, MdContactMail } from "react-icons/md";

const AdminSideBar = () => {
  return (
    <div className="text-white bg-blue-700 w-60 pe-4 min-h-screen">
      <div className="flex items-center justify-center text-2xl py-6">
        <p className="hidden sm:block font-medium">ViteCode Tech</p>
      </div>

      <div className="ml-3">
        <div>
          <h1 className="font-bold underline underline-offset-8">Add</h1>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
              ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
            }
          >
            <MdLibraryBooks size={22} />
            <p className="font-semibold hidden sm:block">Course</p>
          </NavLink>

          <NavLink
            to="/addservice"
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
              ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
            }
          >
            <MdLaptop size={22} />
            <p className="font-semibold hidden sm:block">Service</p>
          </NavLink>

          <h1 className="font-bold underline underline-offset-8">List</h1>

          <NavLink
            to="/courselist"
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
              ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
            }
          >
            <MdFormatListBulleted size={22} />
            <p className="font-semibold hidden sm:block">Course List</p>
          </NavLink>

          <NavLink
            to="/servicelist"
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
              ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
            }
          >
            <MdLaptop size={22} />
            <p className="font-semibold hidden sm:block">Service List</p>
          </NavLink>

          <NavLink
            to="/contactenquirylist"
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
              ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
            }
          >
            <MdContactMail size={22} />
            <p className="font-semibold hidden sm:block">Contact Enquiry</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
