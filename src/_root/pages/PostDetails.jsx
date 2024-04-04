import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostDetailes } from "../../services/postServices";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { AddComment } from "../../services/commentService";
import { useFormik } from "formik";

import { FaHeart } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { HiOutlineSave } from "react-icons/hi";
import img1 from '../imgs/Default Profile.jpg'

function PostDetails() {
  // Post Info //
  const param = useParams();

  const navigate = useNavigate();

  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPostDetailes(param.id);
        console.log(result.data);
        setPostDetails(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [param.id]);

  let tags = postDetails?.tags.split(",");

  // Comment Sent //
  const { token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  console.log(user?.UserID);

  const formik = useFormik({
    initialValues: {
      description: "",
      userId: user?.UserID,
      postId: param.id,
    },
    onSubmit: (values) => {
      if (values.description.trim() !== "") {
        AddComment(values)
          .then(() => {
            window.location.reload();
          })
          .catch((e) => console.log(e));
      }
    },
  });

  // User owner check //

  const checkOwner = user && user.UserID === postDetails?.userId;

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex flex-col w-[850px] gap-5 my-[30px] max-[1080px]:mb-[100px] max-[900px]:w-[650px] max-[700px]:w-[450px] max-[500px]:w-[300px]">
        <div className="flex items-center gap-3">
          <img
            src={postDetails?.userProfileImg ? "https://localhost:7018/Imgs/" + postDetails?.userProfileImg : img1}
            className="rounded-[50%] w-[45px] h-[45px] object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{postDetails?.userName}</h1>
              {checkOwner && (
                <HiAdjustments
                className="text-[20px]"
                onClick={() => navigate(`/post-edit/${postDetails?.id}`)}
                />
              )}
            </div>
            <p>{postDetails?.createdAt.split("T")[0]}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>{postDetails?.caption}</p>
          <div className="flex gap-2 flex-wrap">
            {tags &&
              tags.map((tag, index) => (
                <p
                  key={index}
                  className="p-1 px-2 bg-colors-color3 rounded-[8px]"
                >
                  #{tag.trim()}
                </p>
              ))}
          </div>
        </div>
        <img src={"https://localhost:7018/Imgs/" + postDetails?.img} alt="" />
        <div className="flex gap-5 border-b-gray-500 border border-colors-color2 pb-4">
          <div className="flex gap-2 items-center">
            <FaHeart className="text-[30px] w-[32px]" />
            <h3 className="font-bold text-colors-color3">120</h3>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineSave className="text-[30px]" />
            <h3 className="font-bold text-colors-color3">Save</h3>
          </div>
        </div>
        <div className="h-[170px] overflow-y-auto scrollbar-thin gap-4 flex flex-col">
          {postDetails?.comments.map((comment, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img
                  src={comment.userProfileImg ? "https://localhost:7018/Imgs/" + comment.userProfileImg : img1}
                  className="rounded-[50%] w-[50px] h-[50px] object-cover"
                />
                <div>
                  <h1 className="font-bold">{comment.userName}</h1>
                  <p className="text-[12px]">
                    {comment.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>
              <p>{comment.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-colors-color1 p-2 px-4 flex rounded-[8px] ">
          <input
            name="description"
            onChange={formik.handleChange}
            type="text"
            className="outline-none bg-colors-color1 w-[100%]"
            placeholder="Add a comment ..."
          />
          <button
            onClick={formik.handleSubmit}
            className="p-1 px-3 rounded-[8px] bg-colors-color3"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
