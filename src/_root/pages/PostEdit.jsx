import React, { useState, useEffect } from "react";
import {
  getPostDetailes,
  UpdatePost,
  DeletePost,
} from "../../services/postServices";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

function PostEdit() {
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

  // Post Info //
  const param = useParams();

  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPostDetailes(param.id);
        console.log(result.data);
        setPostDetails(result.data);
        setText(result.data?.caption || "");
        setCharCount(result.data?.caption ? result.data.caption.length : 0);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [param.id]);

  // Update Post //
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      caption: "",
      tags: "",
      id: param.id,
    },
    onSubmit: (values) => {
      if (values.caption == "") {
        values.caption = postDetails?.caption;
      }
      if (values.tags == "") {
        values.tags = postDetails?.tags;
      }
      UpdatePost(values)
        .then((res) => {
          navigate(`/post-details/${param.id}`);
          console.log(values);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  // Delete Post //
  const handleDelete = () => {
    DeletePost(postDetails?.id)
      .then((res) => {
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      }); 
  };

  // User Check //
  const { token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  useEffect(() => {
    if (postDetails && user && postDetails.userId !== user.UserID) {
      navigate("*");
    }
  }, [postDetails, user, navigate]);

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex max-[1080px]:pb-[100px]">
        <div className="flex flex-col items-center">
          <div className="w-[850px] py-8 flex items-center gap-1 max-[920px]:w-[750px] max-[800px]:w-[650px] max-[720px]:w-[550px] max-[600px]:w-[450px] max-[520px]:w-[380px] max-[420px]:w-[320px] max-[360px]:w-[300px]">
            <IoCreateOutline className="text-[32px]" />
            <h1 className="text-[30px] font-bold">Edit Post</h1>
          </div>
          <div className="w-[850px] h-fit flex flex-col gap-[50px] max-[920px]:w-[750px] max-[800px]:w-[650px] max-[720px]:w-[550px] max-[600px]:w-[450px] max-[520px]:w-[380px] max-[420px]:w-[320px] max-[360px]:w-[300px]">
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold">Caption</h3>
              <textarea
                value={text}
                onChange={(event) => {
                  handleChange(event);
                  formik.handleChange(event);
                }}
                name="caption"
                defaultValue={postDetails?.caption}
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
              <h3 className="font-bold">
                Photo (You can't change the photo !)
              </h3>
              <div className="h-[550px] w-[100%] rounded-[10px] bg-colors-color1 flex justify-center items-center max-[800px]:bg-colors-color2">
                <img
                  src={"https://localhost:7018/Imgs/" + postDetails?.img}
                  className="max-w-[90%] max-h-[90%] object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                Change Tags (separated by comma " , " and do not use " # ")
              </h3>
              <input
                className="bg-colors-color1 rounded-[10px] resize-none p-[20px] outline-none max-[800px]:bg-colors-color2"
                placeholder="art,game,movie"
                name="tags"
                onChange={formik.handleChange}
                defaultValue={postDetails?.tags}
              ></input>
            </div>
            <div className=" flex justify-end mb-10 max-[360px]:justify-center">
              <div className="flex gap-5 w-fit">
                <button
                  className="bg-colors-color1 p-3 rounded-[8px] max-[800px]:bg-colors-color2 transition duration-200
                  hover:opacity-70"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  className="font-bold bg-red-500 p-3 rounded-[8px]
              transition duration-200
              hover:opacity-60"
                  onClick={() => handleDelete(postDetails.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-colors-color3 p-3 rounded-[8px] transition duration-200
                  hover:opacity-60"
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

export default PostEdit;
