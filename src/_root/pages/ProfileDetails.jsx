import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetailes } from "../../services/userInfoServices";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { FollowUser, CheckFollow,UnFollowUser } from "../../services/followService"; 


import img1 from "../imgs/Default Profile.jpg";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function ProfileDetails() {
  // User Info //
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  // User owner check //
  const { token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  const checkOwner = user && user.UserID === param.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserDetailes(param.id);
        console.log(result.data);
        setUserDetails(result.data);

        const isFollowing = await CheckFollow(param.id, user.UserID);
        setIsFollowing(isFollowing.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [param.id]);

  let imagesrc = userDetails?.profileImg
    ? "https://localhost:7018/Imgs/" + userDetails.profileImg
    : img1;

  // Follow //
  const handleFollow = async () => {
    try {
      await FollowUser(param.id, user.UserID);
      setIsFollowing(false)
      const result = await getUserDetailes(param.id);
      setUserDetails(result.data);
      } catch (error) {
      console.error("Error following user:", error);
    }
  };

  // Unfollow //
  const handleUnFollow = async () => {
    try {
      await UnFollowUser(param.id, user.UserID);
      setIsFollowing(true)
      const result = await getUserDetailes(param.id);
      setUserDetails(result.data);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

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
              <div className="flex gap-4 items-center">
                <h1 className="font-bold text-[30px] max-[550px]:text-[22px]">
                  {userDetails?.userName}
                </h1>
                {!checkOwner && 
                  (!isFollowing ? (
                    <button
                      className="bg-colors-color3 px-[16px] h-[35px] rounded-[5px] transition-all duration-400 hover:opacity-65"
                      onClick={handleUnFollow}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="bg-colors-color3 px-[16px] h-[35px] rounded-[5px] transition-all duration-400 hover:opacity-65"
                      onClick={handleFollow}
                    >
                      Follow
                    </button>
                  ))}
              </div>
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
                <span className="text-colors-color3 font-bold">
                  {userDetails?.posts.length}
                </span>{" "}
                Posts
              </h3>
              <h3 className="text-[20px] max-[550px]:text-[15px] max-[450px]:text-[10px]">
                <span className="text-colors-color3 font-bold">
                  {userDetails?.followsCount}
                </span>{" "}
                Followers
              </h3>
              <h3 className="text-[20px] max-[550px]:text-[15px] max-[450px]:text-[10px]">
                <span className="text-colors-color3 font-bold">
                  {userDetails?.followingCount}
                </span>{" "}
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
          {userDetails?.posts.reverse().map((item) => (
            <div
              className=" h-fit relative"
              onClick={() => navigate(`/post-details/${item.id}`)}
            >
              <img
                src={"https://localhost:7018/Imgs/" + item.img}
                className="w-[300px] h-[300px] object-cover max-[980px]:w-[260px] max-[980px]:h-[260px] max-[830px]:w-[210px] max-[830px]:h-[210px] max-[680px]:w-[170px] max-[680px]:h-[170px] max-[550px]:w-[130px] max-[550px]:h-[130px] max-[450px]:w-[96.7px] max-[450px]:h-[96.7px]"
              />
              <div className="absolute bottom-0 w-[300px]  flex items-center gap-1 p-1 px-1.5 max-[980px]:w-[260px] max-[830px]:w-[210px] max-[680px]:w-[170px] max-[550px]:w-[130px] max-[450px]:w-[96.7px]">
                <FaRegHeart className="text-colors-color3 text-[18px]" />
                <p className="text-[18px]">210</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
