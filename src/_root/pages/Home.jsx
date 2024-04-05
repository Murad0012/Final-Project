import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { GetNonFollowedUsers } from "../../services/userInfoServices";
import { getPosts } from "../../services/postServices";

import img1 from "../imgs/Default Profile.jpg";
import img3 from "../imgs/Netflix logo.jpg";
import img4 from "../imgs/netflixPost.png";

import { FaHeart } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";

function Home() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const navigate = useNavigate();

  // Show User //
  const { token } = useSelector((state) => state.account);

  const user = token != null ? jwtDecode(token) : null;

  const [nonFollowedUsers, setNonFollowedUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  console.log(user.UserID);

  // Show Users //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetNonFollowedUsers(user.UserID);
        console.log(result.data);
        setNonFollowedUsers(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [user.id]);

  // Show Posts //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await getPosts();
        console.log(postsResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [user.UserID]);

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex max-[1080px]:pt-[20px] pb-[100px]">
        <div className=" w-[850px] flex flex-col items-center max-[1080px]:w-fit">
          <div className="w-[850px] py-8 pl-[85px] max-[1080px]:hidden">
            <h1 className="text-[30px] font-bold">Home Feed</h1>
          </div>
          <div className="w-[850px] h-max flex flex-col items-center gap-[50px] max-[1080px]:w-fit">
            {posts.map((item) => (
              <React.Fragment key={item.postID}>
                <div
                  onClick={() => navigate(`/post-details/${item.id}`)}
                  className="w-[680px] bg-colors-color1 rounded-[10px] flex flex-col gap-[20px] p-[1rem] max-[800px]:w-[500px] max-[550px]:p-0 max-[550px]:w-screen"
                >
                  <div className="flex flex-col gap-[15px] w-fit">
                    <div className="flex gap-[8px] w-100% max-[550px]:pl-[10px] items-center">
                      <img
                        src={
                          item.userProfileImg
                            ? "https://localhost:7018/Imgs/" +
                              item.userProfileImg
                            : img1
                        }
                        className="w-[54px] h-[54px] rounded-[50%] object-cover max-[550px]:w-[45px] max-[550px]:h-[45px]"
                      />
                      <div className="flex flex-col justify-center">
                        <h1 className="text-[24px] font-bold max-[550px]:text-[19px]">
                          {item.userUserName}
                        </h1>
                        <p className="text-[14px] text-gray-500 max-[550px]:text-[12px]">
                          {item.createdAt.split("T")[0]}
                        </p>
                      </div>
                    </div>
                    <div className="w-100% flex flex-col gap-2 max-[550px]:pl-[14px]">
                      <h1 className="text-[20px] font-bold max-[550px]:text-[13px]">
                        {item.caption}
                      </h1>
                      <div className="flex gap-3 flex-wrap">
                        {item.tags &&
                          item.tags.split(",").map((tag, index) => (
                            <p
                              key={index}
                              className="p-1 px-2 bg-colors-color3 rounded-[8px]"
                            >
                              #{tag.trim()}
                            </p>
                          ))}
                      </div>
                    </div>
                    <img
                      src={"https://localhost:7018/Imgs/" + item?.img}
                      className="w-[650px] object-cover max-[800px]:w-[480px] max-[550px]:w-[100%] rounded-none"
                    />
                    <div className="flex justify-between w-100% max-[550px]:px-[20px]">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                          <FaHeart className="text-[28px] w-[29px] transition duration-200 " />
                        </div>
                        <BiCommentDetail className="text-[28px]" />
                      </div>
                      <HiOutlineSave className="text-[28px]" />
                    </div>
                  </div>
                </div>
                <hr className="w-[80%]" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className=" flex flex-col max-[1410px]:hidden">
          <div className="py-8">
            <h1 className="text-[30px] font-bold">Make New Friends</h1>
          </div>
          <div className="flex flex-col gap-[25px]">
            {nonFollowedUsers.map((user) => (
              <div
                className="flex gap-[14px] items-center w-[410px] h-[82px] bg-colors-color1 pl-[10px] rounded-[8px] border border-colors-color1
            transition-all duration-200 hover:border-colors-color3"
                onClick={() => navigate(`/profile-details/${user?.id}`)}
              >
                <img
                  src={
                    user.profileImg
                      ? "https://localhost:7018/Imgs/" + user.profileImg
                      : img1
                  }
                  className="rounded-[50%] w-[50px] h-[50px] object-cover"
                />
                <h1 className="text-[18px] font-bold w-[220px]">
                  {user.userName}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
