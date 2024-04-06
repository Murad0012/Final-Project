import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { GetSavedPosts } from "../../services/savedService";

import { IoIosArrowDown } from "react-icons/io";
import img1 from "../imgs/Default Profile.jpg";

function Saved() {
  const [isClicked, setIsClicked] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [sort, setSort] = useState("New");

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.account);
  const user = token != null ? jwtDecode(token) : null;

  // Drpdown //
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Get Saved Posts //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await GetSavedPosts(user.UserID);
        console.log(postsResponse.data);

        if(sort == "New"){
          setSavedPosts(postsResponse.data.reverse());
        }
        else{
          setSavedPosts(postsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="w-[910px] py-8 flex items-center justify-between max-[950px]:w-[760px] max-[800px]:w-[610px] max-[650px]:w-[505px] max-[545px]:w-[385px] max-[410px]:w-[355px] max-[380px]:w-[310px]">
            <h1 className="text-[30px] font-bold max-[650px]:text-[25px] max-[410px]:text-[23px]">
              Saved Posts
            </h1>
            <div className="min-w-[100px] relative marker:2em">
              <div
                className="bg-colors-color1 flex justify-between items-center top-[3em] rounded-[0.5em]  cursor-pointer h-[50px] px-[1em]  max-[410px]:h-[40px] max-[800px]:bg-colors-color2"
                onClick={handleClick}
              >
                <h1 className="font-bold text-[15px] max-[410px]:text-[13px]">
                  {sort}
                </h1>
                <IoIosArrowDown
                  style={{ rotate: isClicked ? "-180deg" : "0deg" }}
                />
              </div>
              <ul
                className="flex flex-col justify-center gap-2 pl-[1em] top-[55px] z-20 list-none  bg-colors-color1 rounded-[0.5em] absolute w-[100%] overflow-hidden max-[800px]:bg-colors-color2"
                style={{ height: isClicked ? "70px" : "0px" }}
              >
                <li className="font-bold transtion duration-200 text-[15px] hover:opacity-50 max-[410px]:text-[13px]"
                onClick={(e) => setSort("New")}>
                  New
                </li>
                <li className="font-bold transtion duration-200 text-[15px]  hover:opacity-50 max-[410px]:text-[13px]"
                onClick={(e) => setSort("Old")}>
                  Old
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[910px]  h-fit flex flex-wrap gap-1 max-[950px]:w-[760px] max-[800px]:w-[610px] max-[650px]:w-[505px] max-[545px]:w-[385px] max-[410px]:w-[355px] max-[380px]:w-[310px]">
            {savedPosts.map((post, index) => (
              <div key={index} className="relative h-fit group" onClick={() =>navigate(`/post-details/${post.id}`)}>
                <img
                  src={"https://localhost:7018/Imgs/" + post.img} // Assuming you have an image property in your saved post object
                  className="w-[300px] h-[300px] object-cover max-[950px]:w-[250px] max-[950px]:h-[250px] max-[800px]:w-[200px] max-[800px]:h-[200px] max-[650px]:w-[165px] max-[650px]:h-[165px]
        max-[545px]:w-[125px] max-[545px]:h-[125px] max-[410px]:w-[115px] max-[410px]:h-[115px] max-[380px]:w-[100px] max-[380px]:h-[100px]"
                />
                <div
                  className="w-[300px] h-[0px] overflow-hidden transtion duration-200 bg-colors-color3 opacity-80 absolute bottom-0 flex justify-between items-center px-[10px] gap-1
          group-hover:h-[40px] max-[950px]:w-[250px] max-[800px]:w-[200px] max-[650px]:w-[165px] max-[545px]:w-[125px] max-[410px]:w-[115px] max-[380px]:hidden"
                >
                  <div className="flex gap-[0.20rem] items-center">
                    <img
                      src={
                        post.userProfileImg
                          ? "https://localhost:7018/Imgs/" +
                          post.userProfileImg
                          : img1
                      }
                      className="rounded-[50%] w-[25px] h-[25px] object-cover max-[545px]:w-[20px] max-[545px]:h-[20px]"
                    />
                    <h1 className="font-bold max-[650px]:text-[14px] max-[545px]:text-[9px] max-[380px]:text-[6px]">
                      {post.userUserName}{" "}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
