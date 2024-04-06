import React from "react";
import { useNavigate } from "react-router-dom";

import { TbError404 } from "react-icons/tb";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="flex flex-col items-center h-[480px]">
        <TbError404 className="text-colors-color3 text-[250px] max-[680px]:text-[200px] max-[380px]:text-[180px]" />
        <h1 className="font-bold text-[25px] mb-[50px] max-[680px]:text-[20px] max-[500px]:text-[15px] max-[380px]:text-[10px]">
          We can't seem to find a page your're looking for.
        </h1>
        <button
          className="p-2 bg-colors-color3 rounded-[5px]"
          onClick={() => navigate("/home")}
        >
          BACK TO HOMEPAGE
        </button>
      </div>
    </div>
  );
}

export default NotFound;
