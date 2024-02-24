import React from "react";
import { useState } from "react";
import img1 from "../imgs/Logo.png";
import { Link } from "react-router-dom";

function SignInForm() {
  const [checktype, setChecktype] = useState(true);

  const handleClick = () => {
    setChecktype(!checktype);
  };
  return (
    <div className="bg-colors-color1 px-10 py-14 rounded-3xl">
      <div className="flex items-center justify-center gap-2">
        <img src={img1} className="h-16 object-cover max-sm:h-12" />
        <h1 className="text-5xl font-semibold text-colors-color3 max-sm:text-4xl">
          Streaminny
        </h1>
      </div>
      <p className="font-medium text-xl text-grat-500 mt-4 max-sm:text-base text-center">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <div className="mb-4">
          <label className="text-lg font-medium" htmlFor="username">
            Username
          </label>
          <input
            placeholder="Enter username"
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
            id="username"
          />
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
            id="password"
            type={checktype ? "password" : "text"}
          />
        </div>
        <div className="mt-4 flex gap-1">
          <input
            className="border border-gray-100 w-5 h-5"
            type="checkbox"
            id="checkbox"
            onClick={handleClick}
          ></input>
          <label htmlFor="checkbox">Show password</label>
        </div>
        <div className="mt-10">
          <button
            className="bg-violet-500 text-xl text-white font-bold rounded-xl py-3 w-full transition duration-200
          hover:opacity-70"
          >
            Sign In
          </button>
        </div>
        <div className="mt-10 flex justify-center gap-x-1">
          <p>Don't have an account?</p>
          <Link
            to="/sign-up"
            className="text-blue-500 transition duration-200 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
