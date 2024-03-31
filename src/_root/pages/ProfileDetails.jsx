import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetailes } from "../../services/userInfoServices";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import img1 from "../imgs/Default Profile.jpg";
import img2 from "../imgs/post1.jpg";
import img3 from "../imgs/post2.webp";
import img4 from "../imgs/post3.jpg";

import { IoCreateOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function ProfileDetails() {
  // User Info //
  const param = useParams();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserDetailes(param.id);
        setUserDetails(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [param.id]);

  let imagesrc = userDetails?.profileImg ? "https://localhost:7018/Imgs/" + userDetails.profileImg : img1;
  
  // User owner check //
  const { token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  const checkOwner = user && user.UserID === param.id;

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px] max-[1080px]:mb-[60px]">
      <div className="flex flex-col">
        <div className="w-[910px]  flex gap-6 py-8 mb-[20px] max-[980px]:w-[790px] max-[830px]:w-[640px] max-[680px]:w-[520px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
          <img
            src={imagesrc}
            className="w-[120px] h-[120px] rounded-[50%] max-[550px]:w-[100px] max-[550px]:h-[100px] max-[450px]:w-[80px] max-[450px]:h-[80px]"
          />
          <div className="flex flex-col pt-[10px] w-[100%]">
            <div className="flex justify-between items-center mb-[5px]">
              <h1 className="font-bold text-[30px] max-[550px]:text-[22px]">
                {userDetails?.userName}
              </h1>
              {checkOwner && (
                <IoCreateOutline
                  className="text-[30px] transition duration-200 hover:text-colors-color3 max-[450px]:text-[25px]"
                  onClick={() => navigate(`/profile-edit/${param.id}`)}
                />
              )}
            </div>
            <p className="text-gray-500 mb-[15px]">
              @{userDetails?.userName.toLowerCase()}
            </p>
            <div className="flex gap-4 mb-4">
              <h3 className="text-[20px] max-[550px]:text-[15px] max-[450px]:text-[10px]">
                <span className="text-colors-color3 font-bold">6</span> Posts
              </h3>
              <h3 className="text-[20px] max-[550px]:text-[15px] max-[450px]:text-[10px]">
                <span className="text-colors-color3 font-bold">20</span>{" "}
                Followers
              </h3>
              <h3 className="text-[20px] max-[550px]:text-[15px] max-[450px]:text-[10px]">
                <span className="text-colors-color3 font-bold">23</span>{" "}
                Following
              </h3>
            </div>
            <p className="w-[90%] max-[550px]:text-[12px]">
              {userDetails?.description}
            </p>
          </div>
        </div>
        <hr className="w-[100%] mx-auto h-[30px]" />
        <div className="w-[910px] border-green-500 h-fit  flex flex-wrap gap-1 mb-[25px] max-[980px]:w-[790px] max-[830px]:w-[640px] max-[680px]:w-[520px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
          <div className=" h-fit relative">
            <img
              src={img2}
              className="w-[300px] h-[300px] object-cover max-[980px]:w-[260px] max-[980px]:h-[260px] max-[830px]:w-[210px] max-[830px]:h-[210px] max-[680px]:w-[170px] max-[680px]:h-[170px] max-[550px]:w-[130px] max-[550px]:h-[130px] max-[450px]:w-[96.7px] max-[450px]:h-[96.7px]"
            />
            <div className="absolute bottom-0 w-[300px]  flex items-center gap-1 p-1 px-1.5 max-[980px]:w-[260px] max-[830px]:w-[210px] max-[680px]:w-[170px] max-[550px]:w-[130px] max-[450px]:w-[96.7px]">
              <FaRegHeart className="text-colors-color3 text-[18px]" />
              <p className="text-[18px]">210</p>
            </div>
          </div>
          <div className=" h-fit relative">
            <img
              src={img3}
              className="w-[300px] h-[300px] object-cover max-[980px]:w-[260px] max-[980px]:h-[260px] max-[830px]:w-[210px] max-[830px]:h-[210px] max-[680px]:w-[170px] max-[680px]:h-[170px] max-[550px]:w-[130px] max-[550px]:h-[130px] max-[450px]:w-[96.7px] max-[450px]:h-[96.7px]"
            />
            <div className="absolute bottom-0 w-[300px]  flex items-center gap-1 p-1 px-1.5 max-[980px]:w-[260px] max-[830px]:w-[210px] max-[680px]:w-[170px] max-[550px]:w-[130px] max-[450px]:w-[96.7px]">
              <FaRegHeart className="text-colors-color3 text-[18px]" />
              <p className="text-[18px]">210</p>
            </div>
          </div>
          <div className=" h-fit relative">
            <img
              src={img4}
              className="w-[300px] h-[300px] object-cover max-[980px]:w-[260px] max-[980px]:h-[260px] max-[830px]:w-[210px] max-[830px]:h-[210px] max-[680px]:w-[170px] max-[680px]:h-[170px] max-[550px]:w-[130px] max-[550px]:h-[130px] max-[450px]:w-[96.7px] max-[450px]:h-[96.7px]"
            />
            <div className="absolute bottom-0 w-[300px]  flex items-center gap-1 p-1 px-1.5 max-[980px]:w-[260px] max-[830px]:w-[210px] max-[680px]:w-[170px] max-[550px]:w-[130px] max-[450px]:w-[96.7px]">
              <FaRegHeart className="text-colors-color3 text-[18px]" />
              <p className="text-[18px]">210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
