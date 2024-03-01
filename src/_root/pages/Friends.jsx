import React from "react";
import { useState } from "react";

import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import img1 from "../imgs/Jlogo.jpg";
import img2 from "../imgs/Xbox Logo.jpg";
import img3 from "../imgs/blenderlogo.jpg";

function Friends() {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
            />
          </div>
          <div className="min-w-[100px] relative marker:2em">
            <div
              className="bg-colors-color1 flex justify-between items-center top-[3em] rounded-[0.5em]  cursor-pointer h-[60px] px-[1em] max-[800px]:bg-colors-color2"
              onClick={handleClick}
            >
              <h1 className="font-bold text-[13px]">All User</h1>
              <IoIosArrowDown
                style={{ rotate: isClicked ? "-180deg" : "0deg" }}
              />
            </div>
            <ul
              className="flex flex-col justify-center gap-2 pl-[1em] top-[68px] z-20 list-none  bg-colors-color1 rounded-[0.5em] absolute w-[100%] overflow-hidden max-[800px]:bg-colors-color2"
              style={{ height: isClicked ? "100px" : "0px" }}
            >
              <li className="font-bold transtion duration-200 text-[13px] hover:opacity-50">
                All User
              </li>
              <li className="font-bold transtion duration-200 text-[13px]  hover:opacity-50">
                Following
              </li>
              <li className="font-bold transtion duration-200 text-[13px]  hover:opacity-50">
                Follows
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[880px] h-[100%] flex flex-col gap-[20px] max-[1080px]:w-[750px] max-[800px]:w-[650px] max-[690px]:w-[550px]  max-[600px]:w-[450px] max-[480px]:w-[350px] max-[380px]:w-[300px]">
          <div className="flex items-center justify-between gap-[10px] p-[18px] pl-[14px] w-[450px] h-fit bg-colors-color1 rounded-[10px] border border-colors-color1 transition-all duration-200 max-[800px]:bg-colors-color2 max-[690px]:w-[320px] max-[380px]:w-[250px] hover:border-colors-color3">
            <div className="flex items-center gap-2">
              <img
                src={img3}
                className="rounded-[50%] w-[40px] object-cover max-[380px]:w-[30px]"
              />
              <h1 className="font-bold max-[380px]:text-[12px]">Blender</h1>
            </div>
            <button className="bg-colors-color3 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65 max-[380px]:px-[12px] max-[380px]:py-[5px] max-[380px]:text-[12px]">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between gap-[10px] p-[18px] pl-[14px] w-[450px] h-fit bg-colors-color1 rounded-[10px] border border-colors-color1 transition-all duration-200 max-[800px]:bg-colors-color2 max-[690px]:w-[320px] max-[380px]:w-[250px] hover:border-colors-color3">
            <div className="flex items-center gap-2 max-[380px]:gap-1">
              <img
                src={img1}
                className="rounded-[50%] w-[40px] object-cover max-[380px]:w-[30px]"
              />
              <h1 className="font-bold max-[380px]:text-[12px]">
                Junemeniz_23
              </h1>
            </div>
            <button className="bg-colors-color3 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65 max-[380px]:px-[12px] max-[380px]:py-[5px] max-[380px]:text-[12px]">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
