import React from "react";
import { useState } from "react";
import img1 from "../imgs/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Register } from "../../services/authServices";
import { RegisterSchema } from "../../validations/registerSchema";

function SignUpForm() {
  const [checktype, setChecktype] = useState(true);

  const handleClick = () => {
    setChecktype(!checktype);
  };

  const navigate = useNavigate();

  // Register //
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      Register(values)
        .then(() => {
          navigate("/sign-in");
        })
        .catch((e) => console.log(e));
    },
    validationSchema: RegisterSchema,
  });

  return (
    <div className="bg-colors-color1 px-10 py-14 rounded-3xl max-[480px]:w-[320px] max-[480px]:p-0 max-[380px]:w-[300px]">
      <div className="flex items-center justify-center gap-1">
        <img src={img1} className="h-16 object-cover max-[380px]:h-14" />
        <h1 className="text-5xl font-semibold text-colors-color3  max-[380px]:text-4xl">
          Streaminny
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="font-medium text-xl text-grat-500 mt-4 w-fit max-[380px]:text-[18px]">
          Welcome! Create your account.
        </p>
      </div>
      <div className="mt-5">
        <div className="mb-2  flex justify-between">
          <div className="flex flex-col w-[45%]">
            <label className="text-lg font-medium" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Enter name"
              className="text-[12px] w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1 ml-1 max-[480px]:text-[12px]">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col w-[45%]">
            <label className="text-lg font-medium" htmlFor="username">
              Username
            </label>
            <input
              placeholder="Enter username"
              className="text-[12px] w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
              id="username"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="text-red-500 text-sm mt-1 ml-1 max-[480px]:text-[12px]">{formik.errors.userName}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter email"
            className="text-[12px] w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1 ml-1 max-[480px]:text-[12px]">{formik.errors.email}</div>
            ) : null}
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="text-[12px] w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent mt-1.5 outline-none active:border-colors-color3"
            id="password"
            type={checktype ? "password" : "text"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1 ml-1 max-[480px]:text-[12px]">{formik.errors.password}</div>
          ) : null}
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
        <div className="mt-7 flex flex-col">
          <button
            className="bg-violet-500 text-xl text-white font-bold rounded-xl py-3 w-full transition duration-200
          hover:opacity-70"
            onClick={formik.handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-10 flex justify-center gap-x-1">
          <p className="max-[380px]:text-[14px]">
            You already have an account?
          </p>
          <Link
            to="/sign-in"
            className="text-blue-500 transition duration-200 hover:text-white max-[380px]:text-[14px]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
