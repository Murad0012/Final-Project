import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserDetailes } from "../services/userInfoServices";

import img1 from "../_root/imgs/Streaminny Logo.png";
import img2 from "../_root/imgs/Default Profile.jpg";

import { BsFillHouseFill } from "react-icons/bs";
import { MdExplore, MdAddPhotoAlternate } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";
import { useSelector } from "react-redux";
import { logOutAction } from "../redux/accountSlice";
import { jwtDecode } from "jwt-decode";

function RootLayout() {
  // Page active style // 
  const path = useLocation();
  const res = path.pathname.toLowerCase();
  const navigate = useNavigate();

  // User Info // 
  const { userName, token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserDetailes(user.UserID);
        setUserDetails(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [user?.UserID]);

  let imagesrc = userDetails?.profileImg ? "https://localhost:7018/Imgs/" + userDetails.profileImg : img2;

  const dispatch = useDispatch()
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
                src={img1}
                className="w-[45px] rounded-[50%] object-cover max-[550px]:w-[40px]"
                onClick={() => navigate("/profile-details/1")}
              />
              <IoMdExit className="text-[32px] text-colors-color3 max-[550px]:text-[28px]" 
              onClick={() => dispatch(logOutAction())}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-colors-color1 fixed bottom-0 left-0 h-[60px] w-screen">
          <ul className="flex h-[100%] items-center justify-between w-[92%]">
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{
                backgroundColor: res == "/home" || res == "/" ? "#8685ff" : "",
              }}
            >
              <BsFillHouseFill
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{
                  color: res == "/home" || res == "/" ? "white" : "#8685ff",
                }}
                onClick={() => navigate("/home")}
              />
            </li>
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{ backgroundColor: res == "/explore" ? "#8685ff" : "" }}
            >
              <MdExplore
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{ color: res == "/explore" ? "white" : "#8685ff" }}
                onClick={() => navigate("/explore")}
              />
            </li>
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{ backgroundColor: res == "/friends" ? "#8685ff" : "" }}
            >
              <FaUserFriends
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{ color: res == "/friends" ? "white" : "#8685ff" }}
                onClick={() => navigate("/friends")}
              />
            </li>
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{ backgroundColor: res == "/saved" ? "#8685ff" : "" }}
            >
              <HiOutlineSave
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{ color: res == "/saved" ? "white" : "#8685ff" }}
                onClick={() => navigate("/saved")}
              />
            </li>
            <li
              className="p-[9px] rounded-[8px] hover:bg-[#211e21]"
              style={{
                backgroundColor: res == "/create-post" ? "#8685ff" : "",
              }}
            >
              <MdAddPhotoAlternate
                className="text-[32px] text-colors-color3 max-[550px]:text-[20px]"
                style={{ color: res == "/create-post" ? "white" : "#8685ff" }}
                onClick={() => navigate("/create-post")}
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
              onClick={() => navigate(`/profile-details/${user?.UserID}`)}
            >
              <img
                src={imagesrc}
                className="w-[54px] rounded-full object-cover ml-2 max-[1590px]:ml-0"
              />
              <div className="flex flex-col justify-center max-[1590px]:hidden">
                <h1 className="text-xl font-bold ">{userName}</h1>
                <h3 className="text-gray-500 ">@{userName?.toLowerCase()}</h3>
              </div>
            </div>
            <ul className="flex flex-col gap-[20px] w-[260px] max-[1590px]:w-[65px] ">
              <li
                className="flex rounded-[8px] p-4 gap-4 transtion duration-400 hover:bg-[#211e21] "
                onClick={() => navigate("/home")}
                style={{
                  backgroundColor:
                    res == "/home" || res == "/" ? "#8685ff" : "",
                }}
              >
                <BsFillHouseFill
                  className="text-[32px]"
                  style={{
                    color: res == "/home" || res == "/" ? "" : "#8685ff",
                  }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Home</h1>
              </li>
              <li
                className="flex rounded-[8px] p-4 gap-4 hover:bg-[#211e21] "
                onClick={() => navigate("/explore")}
                style={{ backgroundColor: res == "/explore" ? "#8685ff" : "" }}
              >
                <MdExplore
                  className="text-[32px]"
                  style={{ color: res == "/explore" ? "" : "#8685ff" }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Explore</h1>
              </li>
              <li
                className="flex rounded-[8px] p-4 gap-4 hover:bg-[#211e21] "
                onClick={() => navigate("/friends")}
                style={{ backgroundColor: res == "/friends" ? "#8685ff" : "" }}
              >
                <FaUserFriends
                  className="text-[28px]"
                  style={{ color: res == "/friends" ? "" : "#8685ff" }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Friends</h1>
              </li>
              <li
                className="flex rounded-[8px] p-4 gap-4 hover:bg-[#211e21] "
                onClick={() => navigate("/saved")}
                style={{ backgroundColor: res == "/saved" ? "#8685ff" : "" }}
              >
                <HiOutlineSave
                  className="text-[32px]"
                  style={{ color: res == "/saved" ? "" : "#8685ff" }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Saved</h1>
              </li>
              <li
                className="flex rounded-[8px] p-4 gap-4 hover:bg-[#211e21]"
                onClick={() => navigate("/create-post")}
                style={{
                  backgroundColor: res == "/create-post" ? "#8685ff" : "",
                }}
              >
                <MdAddPhotoAlternate
                  className="text-[32px]"
                  style={{ color: res == "/create-post" ? "" : "#8685ff" }}
                />
                <h1 className="text-xl max-[1590px]:hidden">Create</h1>
              </li>
            </ul>
          </div>
          <div
            className="flex rounded-[8px] gap-4 p-4 hover:bg-[#211e21]"
            onClick={() => dispatch(logOutAction())}
          >
            <IoMdExit className="text-[32px] text-colors-color3" />
            <h1 className="text-xl max-[1590px]:hidden">Logout</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
