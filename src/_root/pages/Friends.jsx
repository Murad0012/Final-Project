import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { SearchUser } from "../../services/userInfoServices";

import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import defaultProfile from "../imgs/Default Profile.jpg";

function Friends() {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState(".");
  const [filterType, setFilterType] = useState("all");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.account);
  const user = token != null ? jwtDecode(token) : null;

  // Search Style //
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Search User //
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery == "") {
          setSearchQuery(".");
        }
        const result = await SearchUser(searchQuery, filterType, user.UserID);
        setUsers(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [searchQuery, filterType]);

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex flex-col">
        <div className="w-[880px] py-8 flex gap-[80px] items-center max-[1080px]:w-[750px] max-[1080px]:gap-[60px] max-[800px]:w-[650px] max-[690px]:w-[550px] max-[600px]:w-[450px] max-[600px]:gap-[15px] max-[480px]:w-[350px] max-[380px]:w-[300px]">
          <div
            className="flex items-center gap-[10px] border border-colors-color1 w-[550px] h-[60px] bg-colors-color1 p-[10px] rounded-[8px] transition duration-200 max-[800px]:bg-colors-color2"
            style={{ borderColor: isFocused ? "#8685ff" : "#0a090a" }}
          >
            <GoSearch className="text-[28px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-colors-color1 outline-none w-[100%] max-[800px]:bg-colors-color2"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="min-w-[100px] relative marker:2em">
            <div
              className="bg-colors-color1 flex justify-between items-center top-[3em] rounded-[0.5em]  cursor-pointer h-[60px] px-[1em] max-[800px]:bg-colors-color2"
              onClick={handleClick}
            >
              <h1 className="font-bold text-[13px]">Select</h1>
              <IoIosArrowDown
                style={{ rotate: isClicked ? "-180deg" : "0deg" }}
              />
            </div>
            <ul
              className="flex flex-col justify-center gap-2 pl-[1em] top-[68px] z-20 list-none  bg-colors-color1 rounded-[0.5em] absolute w-[100%] overflow-hidden max-[800px]:bg-colors-color2"
              style={{ height: isClicked ? "100px" : "0px" }}
            >
              <li
                className="font-bold transtion duration-200 text-[13px] hover:opacity-50"
                onClick={(e) => setFilterType("all")}
              >
                All User
              </li>
              <li
                className="font-bold transtion duration-200 text-[13px]  hover:opacity-50"
                onClick={(e) => setFilterType("following")}
              >
                Following
              </li>
              <li
                className="font-bold transtion duration-200 text-[13px]  hover:opacity-50"
                onClick={(e) => setFilterType("follows")}
              >
                Follows
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[880px] h-[100%] flex flex-col gap-[20px] max-[1080px]:w-[750px] max-[800px]:w-[650px] max-[690px]:w-[550px]  max-[600px]:w-[450px] max-[480px]:w-[350px] max-[380px]:w-[300px]">
          {users.map((user) => (
            <div className="flex items-center justify-between gap-[10px] p-[18px] pl-[14px] w-[450px] h-fit bg-colors-color1 rounded-[10px] border border-colors-color1 transition-all duration-200 max-[800px]:bg-colors-color2 max-[690px]:w-[320px] max-[380px]:w-[250px] hover:border-colors-color3">
              <div
                className="flex items-center gap-2"
                onClick={() => navigate(`/profile-details/${user?.id}`)}
              >
                <img
                  src={
                    user.profileImg
                      ? "https://localhost:7018/Imgs/" + user.profileImg
                      : defaultProfile
                  }
                  className="rounded-[50%] w-[40px] h-[40px] object-cover max-[380px]:w-[30px] max-[380px]:h-[30px]"
                />
                <h1 className="font-bold max-[380px]:text-[12px]">
                  {user?.userName}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
