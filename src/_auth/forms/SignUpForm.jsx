import React from "react";
import { useState } from "react";
import img1 from "../imgs/Logo.png";
import { Link } from "react-router-dom";

function SignUpForm() {
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
        Welcome! Create your account.
      </p>
      <div className="mt-8">
        <div className="mb-4 flex gap-6 max-sm:justify-between">
          <div className="w-44 max-sm:w-32">
            <label className="text-lg font-medium" htmlFor="username">
              Firstname
            </label>
            <input
              placeholder="Enter name"
              className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none  active:border-colors-color3 max-sm:p-3  placeholder:text-sm"
              id="username"
            />
          </div>
          <div className="w-44 max-sm:w-33">
            <label className="text-lg font-medium" htmlFor="username">
              Lastname
            </label>
            <input
              placeholder="Enter surname"
              className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3 max-sm:p-3 placeholder:text-sm"
              id="username"
            />
          </div>
        </div>
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
        <div className="mt-6">
          <button
            className="bg-violet-500 text-xl text-white font-bold rounded-xl py-3 w-full transition duration-200
          hover:opacity-70"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-10 flex justify-center gap-x-1">
          <p className="max-sm:text-sm">You already have an account?</p>
          <Link
            to="/sign-in"
            className="text-blue-500 transition duration-200 hover:text-white max-sm:text-sm"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
