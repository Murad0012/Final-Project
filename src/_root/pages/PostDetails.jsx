import React from "react";
import { useState } from "react";

import img1 from "../imgs/post1.jpg";
import img2 from "../imgs/Jlogo.jpg";
import img3 from "../imgs/Profile.jpg";

import { FaHeart } from "react-icons/fa";
import { RiFullscreenExitLine } from "react-icons/ri";
import { HiOutlineSave } from "react-icons/hi";

function PostDetails() {
  const [isZoom, setIsZoom] = useState(false);
  const handleClick = () => {
    setIsZoom(!isZoom);
  };
  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px] max-[1080px]:mb-[60px]">
      <div className="flex">
        <div className="flex flex-col w-[910px] justify-center items-center max-[1080px]:w-fit ">
          <div className="flex itmes rounded-[10px] bg-colors-color1 max-[1080px]:flex-col max-[1080px]:my-[30px] max-[650px]:w-screen">
            <div className="bg-colors-color1 hidden gap-2 p-3 items-center border-b-zinc-500 border border-colors-color1 max-[1080px]:flex">
              <img
                src={img2}
                className="w-[45px] h-[45px] object-cover rounded-[50%]"
              />
              <div>
                <h1 className="font-bold">Junemeniz_23</h1>
                <p>12.02.2024</p>
              </div>
            </div>
            <img src={img1} className="max-w-[600px] h-[550px] object-cover max-[650px]:max-w-[100%] max-[650px]:h-[450px]" style={{ objectFit: isZoom ? "contain" : "cover" }}/>
            <div className="bg-colors-color1 w-[100%] rounded-r-[10px] gap-1 flex-col flex justify-between border-l-zinc-500 border-2 border-colors-color1 max-[1080px]:hidden">
              <div className="h-[426px] rounded-[10px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 pt-4">
                {/* Post Owner */}
                <div className="flex gap-2 mb-4 ">
                  <img
                    src={img2}
                    className="rounded-[50%] w-[40px] h-[40px] object-cover"
                  />
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1>Polygonrunwa</h1>
                      <p className="text-[12px] text-gray-400">12.02.2002</p>
                    </div>
                    <p className="text-[12px]">
                      Hi guys,it is my new setup.Rate pls !
                    </p>
                  </div>
                </div>
                {/* Chat */}
                <div className="flex gap-2 mb-4">
                  <img
                    src={img3}
                    className="rounded-[50%] w-[40px] h-[40px] object-cover"
                  />
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1>Murad0012</h1>
                      <p className="text-[12px] text-gray-400">12.02.2002</p>
                    </div>
                    <p className="text-[12px]">Nice !</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-3  border-t-zinc-500 border border-colors-color1">
                <FaHeart className="text-[25px] w-[26px]" />
                <div className="flex gap-2 items-center">
                  <RiFullscreenExitLine
                    className="text-[25px]"
                    onClick={handleClick}
                  />
                  <HiOutlineSave className="text-[25px] w-[26px]" />
                </div>
              </div>
              <div className="border-t-zinc-500 border border-colors-color1 rounded-br-[10px] flex p-3 py-2 items-center gap-3">
                <input type="text" className="bg-colors-color2 p-1 outline-none rounded-sm" />
                <h1>Sent</h1>
              </div>
            </div>
            <div className="bg-colors-color1 hidden flex-col max-[1080px]:flex">
              <div className="flex justify-between p-3  border-y-zinc-500 border border-colors-color1">
                <FaHeart className="text-[25px] w-[26px]" />
                <div className="flex gap-2 items-center">
                  <RiFullscreenExitLine
                    className="text-[25px]"
                    onClick={handleClick}
                  />
                  <HiOutlineSave className="text-[25px] w-[26px]" />
                </div>
              </div>
              <div className="h-[150px] rounded-[10px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-3 pt-4">
                {/* Post Owner */}
                <div className="flex gap-2 mb-4 ">
                  <img
                    src={img2}
                    className="rounded-[50%] w-[40px] h-[40px] object-cover"
                  />
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1>Polygonrunwa</h1>
                      <p className="text-[12px] text-gray-400">12.02.2002</p>
                    </div>
                    <p className="text-[12px]">
                      Hi guys,it is my new setup.Rate pls !
                    </p>
                  </div>
                </div>
                {/* Chat */}
                <div className="flex gap-2 mb-4">
                  <img
                    src={img3}
                    className="rounded-[50%] w-[40px] h-[40px] object-cover"
                  />
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1>Murad0012</h1>
                      <p className="text-[12px] text-gray-400">12.02.2002</p>
                    </div>
                    <p className="text-[12px]">Nice !</p>
                  </div>
                </div>
                
              </div>
              <div className="border-t-zinc-500 border border-colors-color1 rounded-br-[10px] flex p-3 py-2 items-center gap-4">
                <input type="text" className="bg-colors-color2 p-1 outline-none rounded-sm w-[90%]" />
                <h1>Sent</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
