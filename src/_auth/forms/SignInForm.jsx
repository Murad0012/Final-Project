import React from "react";
import { useState } from "react";
import img1 from "../imgs/Logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { Login } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/accountSlice";

function SignInForm() {
  const navigate = useNavigate();

  // Show Password //
  const [checktype, setChecktype] = useState(true);

  const handleClick = () => {
    setChecktype(!checktype);
  };

  // Login //
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      Login(values)
        .then((res) => {
          dispatch(logInAction(res.data));
          navigate("/home");
        })
        .catch((e) => {
          setError(true);
        });
    },
  });

  return (
    <div className="bg-colors-color1 px-10 py-14 rounded-3xl max-[480px]:w-[320px] max-[480px]:p-0 max-[380px]:w-[300px]">
      <div className="flex items-center justify-center gap-1">
        <img src={img1} className="h-16 object-cover max-[380px]:h-14" />
        <h1 className="text-5xl font-semibold text-colors-color3 max-[380px]:text-4xl">
          Streaminny
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="font-medium text-xl text-grat-500 mt-4 w-fit max-[490px]:text-[14px]">
          Welcome back! Please enter your details.
        </p>
      </div>
      <div className="mt-8">
        <div className="mb-4">
          <label className="text-lg font-medium" htmlFor="username">
            Username
          </label>
          <input
            placeholder="Enter username"
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
            id="username"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
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
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
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
            onClick={formik.handleSubmit}
          >
            Sign In
          </button>
        </div>
        {error && (
          <div className="flex justify-center pt-2">
            <p className="text-red-500 max-[380px] text-[14px]">
              Username or password is incorrect!
            </p>
          </div>
        )}
        <div className="mt-8 flex justify-center gap-x-1">
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
