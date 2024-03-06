import React from "react";
import {useState} from 'react';

import img1 from "../imgs/jPost.webp";
import img2 from "../imgs/Polygon Runway Logo.jpg";
import img3 from "../imgs/Profile.jpg";

import { FaHeart } from "react-icons/fa";
import { MdZoomIn } from "react-icons/md";
import { HiOutlineSave } from "react-icons/hi";

function PostDetails() {
  const [isZoom, setIsZoom] = useState(false);
  const handleClick = () => {
    setIsZoom(!isZoom);
  };
  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px] max-[1080px]:mb-[60px]">
      <div className="flex">
        <div className="flex flex-col w-[910px] justify-center">
          <div className="flex">  
            <img src={img1} className="max-w-[550px] h-[500px]  object-cover rounded-l-[10px]"  style={{ objectFit: isZoom ? "contain" : "cover" }}/>
            <div className="bg-colors-color1 w-[100%] rounded-r-[10px] flex-col flex justify-between">
              <div className="h-[78%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 border-b-zinc-500 border border-colors-color1 p-3 pt-4">
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
                    <p className="text-[12px]">
                      Nice !
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-3">
                <FaHeart className="text-[25px] w-[26px]"/>
                <div className="flex gap-2 items-center">
                  <MdZoomIn className="text-[25px]" onClick={handleClick}/>
                  <HiOutlineSave className="text-[25px] w-[26px]"/>
                </div>
              </div>
              <div className="p-2 flex justify-between items-center border-t-zinc-500 border border-colors-color1 rounded-br-[10px]">
                <img src={img3} className="rounded-[50%] w-[35px] h-[35px] object-cover"/>
                <textarea className="p-2 h-[40px] w-[250px] resize-none bg-colors-color2 outline-none rounded-[20px]"></textarea>
                <p>Sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
