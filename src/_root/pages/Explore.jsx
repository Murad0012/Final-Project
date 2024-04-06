import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { GetExplorePosts } from "../../services/postServices";

import defaultProfile from "../imgs/Default Profile.jpg";

function Explore() {
  const [postDetails, setPostDetails] = useState(null);

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.account);
  const user = token != null ? jwtDecode(token) : null;

  // Get Posts //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetExplorePosts(user?.UserID);
        console.log(result.data);
        setPostDetails(result.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, [user.UserID]);

  // Randomizer Posts //
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center  max-[1590px]:ml-[120px] max-[1080px]:ml-0  max-[1080px]:mt-[60px] max-[1080px]:mb-[60px] max-[1080px]:pt-[20px]">
      <div className="flex">
        <div className="w-[910px] h-fit flex flex-wrap gap-1 max-[950px]:w-[760px] max-[800px]:w-[610px] max-[650px]:w-[515px] max-[545px]:w-[385px] max-[410px]:w-[355px] max-[380px]:w-[310px]">
          {postDetails ? (
            shuffleArray(postDetails).map((item) => (
              <div
                className="relative  h-fit group"
                onClick={() => navigate(`/post-details/${item.id}`)}
              >
                <img
                  src={"https://localhost:7018/Imgs/" + item.img}
                  className="w-[300px] h-[300px] object-cover max-[950px]:w-[250px] max-[950px]:h-[250px] max-[800px]:w-[200px] max-[800px]:h-[200px] max-[650px]:w-[165px] max-[650px]:h-[165px]
              max-[545px]:w-[125px] max-[545px]:h-[125px] max-[410px]:w-[115px] max-[410px]:h-[115px] max-[380px]:w-[100px] max-[380px]:h-[100px]"
                />
                <div
                  className=" w-[300px] h-[0px] overflow-hidden transtion duration-200 bg-colors-color3 opacity-80 absolute bottom-0 flex justify-between items-center px-[10px] gap-1
            group-hover:h-[40px] max-[950px]:w-[250px] max-[800px]:w-[200px] max-[650px]:w-[165px] max-[545px]:w-[125px] max-[410px]:w-[115px] max-[380px]:hidden"
                >
                  <div className="flex gap-[0.20rem] items-center">
                    <img
                      src={
                        item.userProfileImg
                          ? "https://localhost:7018/Imgs/" + item.userProfileImg
                          : defaultProfile
                      }
                      className="rounded-[50%] w-[25px] h-[25px] object-cover max-[545px]:w-[20px] max-[545px]:h-[20px]"
                    />
                    <h1 className="font-bold max-[650px]:text-[14px] max-[545px]:text-[9px] max-[380px]:text-[6px]">
                      {item.userUserName}
                    </h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
