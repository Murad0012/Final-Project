import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function CreatePost() {
  // Character counter //
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 400;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setCharCount(inputValue.length);
  };

  const isLimitReached = charCount >= maxChars;

  // Image upload //
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
      console.log(fileUrl);
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".svg"],
    },
  });

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex max-[1080px]:pb-[100px]">
        <div className="flex flex-col items-center">
          <div className="w-[850px] py-8 flex items-center gap-1 max-[920px]:w-[750px] max-[800px]:w-[650px] max-[720px]:w-[550px] max-[600px]:w-[450px] max-[520px]:w-[380px] max-[420px]:w-[320px] max-[360px]:w-[300px]">
            <MdOutlineAddPhotoAlternate className="text-[32px]" />
            <h1 className="text-[30px] font-bold">Create Post</h1>
          </div>
          <div className="w-[850px] h-fit flex flex-col gap-[50px] max-[920px]:w-[750px] max-[800px]:w-[650px] max-[720px]:w-[550px] max-[600px]:w-[450px] max-[520px]:w-[380px] max-[420px]:w-[320px] max-[360px]:w-[300px]">
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold">Caption</h3>
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type caption..."
                rows={4}
                maxLength={maxChars}
                className={`resize-none w-full h-[220px] border rounded-[10px] p-[10px] outline-none outline-nonetransition duration-150  bg-colors-color1 max-[800px]:bg-colors-color2 ${
                  isLimitReached ? "border-red-500" : "border-colors-color2"
                }`}
              ></textarea>
              <p>
                Characters remaining: {charCount}/{maxChars}
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold">Add Photo (PNG,JPEG,JPG,SVG)</h3>
              <div
                {...getRootProps()}
                className="h-[550px] w-[100%] rounded-[10px] bg-colors-color1 flex justify-center items-center max-[800px]:bg-colors-color2"
              >
                <input {...getInputProps()} />
                {fileUrl ? (
                  <img
                    src={fileUrl}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <MdOutlineAddPhotoAlternate className="text-[90px]" />
                    <h1 className="font-bold">Drag photo here</h1>
                    <button className="p-2 bg-colors-color3 rounded-[4px]">
                      Select from computer
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                Add Tags (separated by comma " , " and do not use " # ")
              </h3>
              <input
                className="bg-colors-color1 rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2"
                placeholder="art,game,movie"
              ></input>
            </div>
            <div className=" flex justify-end mb-10">
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
