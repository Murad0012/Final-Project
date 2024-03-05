import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

import img1 from "../imgs/Profile.jpg";

function ProfileEdit() {
  // Character counter //
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setCharCount(inputValue.length);
  };

 
  const isLimitReached = charCount >= maxChars;
  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px] max-[1080px]:mb-[60px]">
      <div className="flex">
        <div className="flex flex-col w-[850px] max-[900px]:w-[700px] max-[750px]:w-[600px] max-[650px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
          <div className="flex items-center  py-8 gap-1 ">
            <IoCreateOutline className="text-[32px]" />
            <h1 className="text-[30px] font-bold">Edit Profile</h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <img src={img1} className="w-[70px] h-[70px] object-contain rounded-[50%]"/>
              <h1 className="text-colors-color3">Change Profile Picture</h1>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Name
              </label>
              <input
                className="bg-colors-color1 w-[300px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[200px] max-[550px]:text-[14px]"
                placeholder="Murad"
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Username
              </label>
              <input
                className="bg-colors-color1 w-[300px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[200px] max-[550px]:text-[14px]"
                placeholder="Murad0012"
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Email
              </label>
              <input
                className="bg-colors-color1 w-[400px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[300px] max-[550px]:text-[12px]"
                placeholder="murad.mammedzade11@gmail.com"
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Description</h3>
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type description..."
                rows={4}
                maxLength={maxChars}
                className={`resize-none w-full h-[220px] border rounded-[10px] p-[10px] outline-none outline-nonetransition duration-150  bg-colors-color1 max-[800px]:bg-colors-color2 max-[550px]:text-[14px] ${
                  isLimitReached ? "border-red-500" : "border-colors-color2"
                }`}
              ></textarea>
              <p>
                Characters remaining: {charCount}/{maxChars}
              </p>
            </div>

            <div className="flex justify-end mb-10">
              <div className="flex gap-5 w-fit">
                <button
                  className="bg-colors-color1 p-3 rounded-[8px] max-[800px]:bg-colors-color2 transition duration-200
                  hover:opacity-70"
                >
                  Cancel
                </button>
                <button
                  className="bg-colors-color3 p-3 rounded-[8px] transition duration-200
                  hover:opacity-70"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
