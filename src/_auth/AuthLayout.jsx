import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex w-full h-screen max-sm:bg-colors-color1">
      <div className="w-full flex items-center justify-center xl:w-1/2">
        <Outlet />
      </div>
      <div className="hidden relative xl:flex h-full w-1/2 items-center justify-center bg-colors-color1">
        <div className="w-60 h-60 bg-gradient-to-tr from-colors-color3 to-white rounded-full animate-pulse"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-colors-color1/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default AuthLayout;
