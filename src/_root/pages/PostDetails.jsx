import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../imgs/post1.jpg";
import img2 from "../imgs/Jlogo.jpg";
import img3 from "../imgs/Profile.jpg";

import { FaHeart } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { HiOutlineSave } from "react-icons/hi";

function PostDetails() {
  const navigate = useNavigate();

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex flex-col w-[850px] gap-5 my-[30px] max-[1080px]:mb-[100px] max-[900px]:w-[650px] max-[700px]:w-[450px] max-[500px]:w-[300px]">
        <div className="flex items-center gap-3">
          <img src={img2} className="rounded-[50%] w-[45px] h-[45px] object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Murad0012</h1>
              <HiAdjustments className="text-[20px]" onClick={() => navigate("/post-edit/1")}/>
            </div>
            <p>12.02.2023</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>⚔️ Avowed ⚔️ Coming to Xbox Series X|S, PC, and Game Pass Fall 2024 |</p>
          <div className="flex gap-2 flex-wrap">
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#Xbox</p>
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#Game</p> 
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#DeveloperDirect</p> 
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#Xbox</p>
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#Game</p> 
            <p className="p-1 px-2 bg-colors-color3 rounded-[8px]">#DeveloperDirect</p> 
          </div>
        </div>
        <img src={img1} alt="" />
        <div className="flex gap-5 border-b-gray-500 border border-colors-color1 pb-4">
          <div className="flex gap-2 items-center">
            <FaHeart className="text-[30px] w-[32px]"/>
            <h3 className="font-bold text-colors-color3">120</h3>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineSave className="text-[30px]"/>
            <h3 className="font-bold text-colors-color3">Save</h3>
          </div>
        </div>
        <div className="h-[170px] overflow-y-auto scrollbar-thin gap-4 flex flex-col">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src={img3} className="rounded-[50%] w-[50px] h-[50px] object-cover"/>
              <div>
                <h1 className="font-bold">Marco</h1>
                <p className="text-[12px]">12.02.2021</p>
              </div>
            </div>
            <p>Bro it is nice.I wanna buy this</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src={img3} className="rounded-[50%] w-[50px] h-[50px] object-cover"/>
              <div>
                <h1 className="font-bold">Marco</h1>
                <p className="text-[12px]">12.02.2021</p>
              </div>
            </div>
            <p>Bro it is nice.I wanna buy this</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src={img3} className="rounded-[50%] w-[50px] h-[50px] object-cover"/>
              <div>
                <h1 className="font-bold">Marco</h1>
                <p className="text-[12px]">12.02.2021</p>
              </div>
            </div>
            <p>Bro it is nice.I wanna buy this</p>
          </div>
        </div>
        <div className="bg-colors-color1 p-2 px-4 flex rounded-[8px] ">
          <input type="text" className="outline-none bg-colors-color1 w-[100%]" placeholder="Add a comment ..." />
          <button className="p-1 px-3 rounded-[8px] bg-colors-color3">Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
