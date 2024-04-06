import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import { updateUser } from "../../redux/accountSlice";
import { UpdateUserDetailes } from "../../services/userInfoServices";
import { getUserDetailes } from "../../services/userInfoServices";

import { IoCreateOutline } from "react-icons/io5";

function ProfileEdit() {
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.account);
  const user = token != null ? jwtDecode(token) : null;

  // Character counter //
  const maxChars = 200;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setCharCount(inputValue.length);
  };

  const isLimitReached = charCount >= maxChars;

  // User Get Info //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserDetailes(param.id);
        setUserDetails(result.data);
        setText(result.data?.description || "");
        setCharCount(
          result.data?.description ? result.data.description.length : 0
        );
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [param.id]);

  // User Update Info //
  const formik = useFormik({
    initialValues: {
      userName: "",
      name: "",
      userId: param.id,
      description: "",
      profileImg: null,
    },
    onSubmit: (values) => {
      if (values.userName == "") {
        values.userName = userDetails?.userName;
      }
      if (values.name == "") {
        values.name = userDetails?.name;
      }
      if (values.description == "") {
        values.description = userDetails?.description;
      }
      if (values.profileImg == null) {
        values.profileImg = new File([], "empty_file");
      }

      UpdateUserDetailes(values)
        .then((res) => {
          dispatch(updateUser(values.userName));
          navigate(`/profile-details/${param.id}`);
          window.location.reload();
        })
        .catch((e) => {
          setError(true);
          console.log(e);
        });
    },
  });

  // User Check //
  useEffect(() => {
    if (userDetails && user && param.id !== user.UserID) {
      navigate("*");
    }
  }, [userDetails, user, navigate]);

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
              <input
                type="file"
                onChange={(e) =>
                  formik.setFieldValue("profileImg", e.target.files[0])
                }
                name="profileImg"
                accept="image/*"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Name
              </label>
              <input
                className="bg-colors-color1 w-[300px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[200px] max-[550px]:text-[14px]"
                placeholder="Murad"
                defaultValue={userDetails?.name}
                name="name"
                onChange={formik.handleChange}
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Username
              </label>
              <input
                className="bg-colors-color1 w-[300px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[200px] max-[550px]:text-[14px]"
                placeholder="Murad0012"
                defaultValue={userDetails?.userName}
                name="userName"
                onChange={formik.handleChange}
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Email (You can't change !)
              </label>
              <input
                className="bg-colors-color1 w-[400px] rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2 max-[550px]:w-[300px] max-[550px]:text-[12px]"
                placeholder="murad.mammedzade11@gmail.com"
                disabled
                defaultValue={userDetails?.email}
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Description</h3>
              <textarea
                values={text}
                placeholder="Type description..."
                rows={4}
                maxLength={maxChars}
                className={`resize-none w-full h-[220px] border rounded-[10px] p-[10px] outline-none outline-nonetransition duration-150  bg-colors-color1 max-[800px]:bg-colors-color2 max-[550px]:text-[14px] ${
                  isLimitReached ? "border-red-500" : "border-colors-color2"
                }`}
                defaultValue={userDetails?.description}
                onChange={(event) => {
                  handleChange(event);
                  formik.handleChange(event);
                }}
                name="description"
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
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  className="bg-colors-color3 p-3 rounded-[8px] transition duration-200
                  hover:opacity-70"
                  onClick={formik.handleSubmit}
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
