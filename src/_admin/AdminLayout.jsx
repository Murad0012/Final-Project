import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import img1 from "../_root/imgs/Streaminny Logo.png";
import img2 from "../_root/imgs/Profile.jpg";

import { FaUsersCog } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

function AdminLayout() {
  const path = useLocation();
  const res = path.pathname.toLowerCase();

  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-[800px]:bg-colors-color1">
      <div className="w-screen fixed hidden max-[1080px]:block z-50">
        <div className="flex items-center bg-colors-color1 h-[60px] justify-center">
          <div className="flex w-[95%] justify-between">
            <div className="flex items-center gap-1">
              <img src={img1} className="w-[40px]" />
              <h1 className="text-[22px] text-colors-color3 font-bold">
                Streaminny
              </h1>
            </div>
            <div className="flex items-center gap-[1.30rem]">
              <img
                src={img2}
                className="w-[45px] rounded-[50%] object-cover max-[550px]:w-[40px]"
              />
              <IoMdExit className="text-[32px] text-colors-color3 max-[550px]:text-[28px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-colors-color1 fixed bottom-0 left-0 h-[60px] w-screen">
          <ul className="flex h-[100%] items-center justify-evenly w-[92%]">
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{
                backgroundColor: res == "/admin/users" ? "#8685ff" : "",
              }}
            >
              <FaUsersCog
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{
                  color: res == "/admin/users" ? "white" : "#8685ff",
                }}
                onClick={() => navigate("/admin/users")}
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        className=" fixed w-[300px] bg-colSors-color1 flex items-center justify-center bg-colors-color1 h-screen max-[1590px]:w-[120px]
      max-[1080px]:hidden"
      >
        <div className="h-[95%] flex flex-col justify-between w-fit">
          <div className="w-fit flex flex-col gap-[40px] mt-[10px] max-[1590px]:items-center">
            <div className="flex items-center w-fit gap-2">
              <img src={img1} className="w-[52px]" />
              <h1 className="text-[28px] font-bold text-colors-color3 max-[1590px]:hidden">
                Streaminny
              </h1>
            </div>
            <div
              className="flex gap-2 w-fit cursor-default"
              onClick={() => navigate("/profile-details/1")}
            >
              <img
                src={img2}
                className="w-[54px] rounded-full object-cover ml-2 max-[1590px]:ml-0"
              />
              <div className="flex flex-col justify-center max-[1590px]:hidden">
                <h1 className="text-xl font-bold ">Murad0012</h1>
                <h3 className="text-gray-500 ">@murad0012</h3>
              </div>
            </div>
            <ul className="flex flex-col gap-[20px] w-[260px] max-[1590px]:w-[65px] ">
              <li
                className="flex rounded-[8px] p-4 gap-4 transtion duration-400 hover:bg-[#211e21] "
                onClick={() => navigate("/admin/users")}
                style={{
                  backgroundColor: res == "/admin/users" ? "#8685ff" : "",
                }}
              >
                <FaUsersCog
                  className="text-[32px]"
                  style={{
                    color: res == "/admin/users" ? "" : "#8685ff",
                  }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Users</h1>
              </li>
            </ul>
          </div>
          <div className="flex rounded-[8px] gap-4 p-4 hover:bg-[#211e21]">
            <IoMdExit className="text-[32px] text-colors-color3" />
            <h1 className="text-xl max-[1590px]:hidden">Logout</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
