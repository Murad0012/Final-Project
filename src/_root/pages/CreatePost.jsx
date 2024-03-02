import React from "react";
import { useState } from "react";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

function CreatePost() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 400;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setCharCount(inputValue.length);
  };

  const isLimitReached = charCount >= maxChars;

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center">
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="w-[850px] py-8 flex items-center gap-1">
            <IoCreateOutline className="text-[32px]" />
            <h1 className="text-[30px] font-bold">Create Post</h1>
          </div>
          <div className="w-[850px] h-fit flex flex-col gap-[50px]">
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold">Caption</h3>
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type caption..."
                rows={4}
                maxLength={maxChars}
                className={`resize-none w-full h-[220px] border rounded-[10px] p-[10px] outline-none outline-nonetransition duration-150  bg-colors-color1 ${
                  isLimitReached ? "border-red-500" : "border-colors-color2"
                }`}
              ></textarea>
              <p>
                Characters remaining: {charCount}/{maxChars}
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold">Add Photo</h3>
              <form className="h-[550px] w-[100%] rounded-[10px] bg-colors-color1 flex justify-center items-center">
                <div className="flex flex-col items-center gap-3">
                  <MdOutlineAddPhotoAlternate className="text-[80px]" />
                  <h1 className="font-bold">Drag photo here</h1>
                  <input type="file" name="" placeholder="Choso file" />
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                Add Tags (separated by comma " , " and do not use " # ")
              </h3>
              <input
                className="bg-colors-color1 rounded-[10px] resize-none p-[20px] outline-none"
                placeholder="art,game,movie"
              ></input>
            </div>
            <div className=" flex justify-end mb-10">
              <div className="flex gap-5 w-fit">
                <button className="bg-colors-color1 p-3 rounded-[8px]">
                  Cancel
                </button>
                <button className="bg-colors-color3 p-3 rounded-[8px]">
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
