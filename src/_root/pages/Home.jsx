import React from "react";
import { useState } from "react";

import img3 from "../imgs/Netflix logo.jpg";
import img4 from "../imgs/netflixPost.png";
import img5 from "../imgs/Xbox Logo.jpg";
import img6 from "../imgs/XboxPost.png";
import img7 from "../imgs/Jlogo.jpg";
import img8 from "../imgs/blenderlogo.jpg";
import img9 from "../imgs/blenderpost.png";

import { FaHeart } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";

function Home() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1000px]:ml-0 max-[1000px]:mt-[60px]">
      <div className="flex max-[1000px]:pt-[20px] pb-[100px]">
        <div className=" w-[850px] flex flex-col items-center max-[1000px]:w-fit">
          <div className="w-[850px] my-8 pl-[85px] max-[1000px]:hidden">
            <h1 className="text-[30px] font-bold">Home Feed</h1>
          </div>
          <div className="w-[850px] h-max flex flex-col items-center gap-[50px] max-[1000px]:w-fit">
            <div
              className="w-[680px]  bg-colors-color1 rounded-[10px] flex flex-col gap-[20px] p-[1rem]
            max-[800px]:w-[500px] max-[550px]:p-0 max-[550px]:w-screen"
            >
              <div className="flex flex-col gap-[15px] w-fit">
                <div className="flex gap-[8px] w-100% max-[550px]:pl-[10px] items-center">
                  <img
                    src={img3}
                    className="w-[54px] h-[54px] rounded-[50%] object-cover max-[550px]:w-[45px] max-[550px]:h-[45px]"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] font-bold max-[550px]:text-[19px]">
                      Netflix
                    </h1>
                    <p className="text-[14px] text-gray-500 max-[550px]:text-[12px]">
                      3 days ago
                    </p>
                  </div>
                </div>
                <div className="w-100% max-[550px]:pl-[14px]">
                  <h1 className="text-[20px] font-bold max-[550px]:text-[14px]">
                    Thank me later
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-500">#movie</p>
                    <p className="text-[14px] text-gray-500">#neflix</p>
                    <p className="text-[14px] text-gray-500">#family</p>
                  </div>
                </div>
                <img
                  src={img4}
                  className="w-[650px] object-cover max-[800px]:w-[480px] max-[550px]:w-[100%] rounded-none"
                />
                <div className="flex justify-between w-100% max-[550px]:px-[20px]">
                  <div className="flex items-center gap-3">
                    <FaHeart
                      className="text-[28px] w-[29px] transition duration-200	"
                      style={{ color: isClicked ? "white" : "red" }}
                      onClick={handleClick}
                    />
                    <p>120</p>
                  </div>
                  <HiOutlineSave className="text-[28px]" />
                </div>
              </div>
            </div>
            <hr className="w-[95%]" />
            <div
              className="w-[680px]  bg-colors-color1 rounded-[10px] flex flex-col gap-[20px] p-[1rem]
            max-[800px]:w-[500px] max-[550px]:p-0 max-[550px]:w-screen"
            >
              <div className="flex flex-col gap-[15px] w-fit">
                <div className="flex gap-[8px] w-100% max-[550px]:pl-[10px] items-center">
                  <img
                    src={img5}
                    className="w-[54px] h-[54px] rounded-[50%] object-cover max-[550px]:w-[45px] max-[550px]:h-[45px]"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] font-bold max-[550px]:text-[19px]">
                      Xbox
                    </h1>
                    <p className="text-[14px] text-gray-500 max-[550px]:text-[12px]">
                      1 days ago
                    </p>
                  </div>
                </div>
                <div className="w-100% max-[550px]:pl-[14px]">
                  <h1 className="text-[20px] font-bold max-[550px]:text-[14px]">
                    ⚔️ Avowed ⚔️ Coming to Xbox Series X|S, PC, and Game Pass
                    Fall 2024 |
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-500">
                      #DeveloperDirect
                    </p>
                    <p className="text-[14px] text-gray-500">#xbox</p>
                  </div>
                </div>
                <img
                  src={img6}
                  className="w-[650px] object-cover max-[800px]:w-[480px] max-[550px]:w-[100%] rounded-none"
                />
                <div className="flex justify-between w-100% max-[550px]:px-[20px]">
                  <div className="flex items-center gap-3">
                    <FaHeart
                      className="text-[28px] w-[29px] transition duration-200	"
                      style={{ color: isClicked ? "white" : "red" }}
                      onClick={handleClick}
                    />
                    <p>290</p>
                  </div>
                  <HiOutlineSave className="text-[28px]" />
                </div>
              </div>
            </div>
            <hr className="w-[95%]" />
            <div
              className="w-[680px]  bg-colors-color1 rounded-[10px] flex flex-col gap-[20px] p-[1rem]
            max-[800px]:w-[500px] max-[550px]:p-0 max-[550px]:w-screen"
            >
              <div className="flex flex-col gap-[15px] w-fit">
                <div className="flex gap-[8px] w-100% max-[550px]:pl-[10px] items-center">
                  <img
                    src={img8}
                    className="w-[54px] h-[54px] rounded-[50%] object-cover max-[550px]:w-[45px] max-[550px]:h-[45px]"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] font-bold max-[550px]:text-[19px]">
                      Blender
                    </h1>
                    <p className="text-[14px] text-gray-500 max-[550px]:text-[12px]">
                      1 hours ago
                    </p>
                  </div>
                </div>
                <div className="w-100% max-[550px]:pl-[14px]">
                  <h1 className="text-[20px] font-bold max-[550px]:text-[14px]">
                    The CHARGE ⚡️open movie by Blender Studio is live on
                    YouTube - Check it out!{" "}
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-500">#b3d</p>
                    <p className="text-[14px] text-gray-500">#blender</p>
                    <p className="text-[14px] text-gray-500">#animation</p>
                  </div>
                </div>
                <img
                  src={img9}
                  className="w-[650px] object-cover max-[800px]:w-[480px] max-[550px]:w-[100%] rounded-none"
                />
                <div className="flex justify-between w-100% max-[550px]:px-[20px]">
                  <div className="flex items-center gap-3">
                    <FaHeart
                      className="text-[28px] w-[29px] transition duration-200	"
                      style={{ color: isClicked ? "white" : "red" }}
                      onClick={handleClick}
                    />
                    <p>839</p>
                  </div>
                  <HiOutlineSave className="text-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col max-[1410px]:hidden">
          <div className="my-8">
            <h1 className="text-[30px] font-bold">Make New Friends</h1>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div
              className="flex gap-[14px] items-center w-[410px] h-[82px] bg-colors-color1 pl-[10px] rounded-[8px] border border-colors-color1
            transition-all duration-200 hover:border-colors-color3"
            >
              <img src={img3} className="rounded-[50%] w-[50px] object-cover" />
              <h1 className="text-[18px] font-bold w-[220px]">Netflix</h1>
              <button className="bg-colors-color3 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65">
                Follow
              </button>
            </div>
            <div
              className="flex gap-[14px] items-center w-[410px] h-[82px] bg-colors-color1 pl-[10px] rounded-[8px] border border-colors-color1
            transition-all duration-200 hover:border-colors-color3"
            >
              <img src={img5} className="rounded-[50%] w-[50px] object-cover" />
              <h1 className="text-[18px] font-bold w-[220px]">Xbox</h1>
              <button className="bg-colors-color3 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65">
                Follow
              </button>
            </div>
            <div
              className="flex gap-[14px] items-center w-[410px] h-[82px] bg-colors-color1 pl-[10px] rounded-[8px] border border-colors-color1
            transition-all duration-200 hover:border-colors-color3"
            >
              <img src={img7} className="rounded-[50%] w-[50px] object-cover" />
              <h1 className="text-[18px] font-bold w-[220px]">Junemeniz_23</h1>
              <button className="bg-colors-color3 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
