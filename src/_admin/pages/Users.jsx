import React, { useState,useEffect } from "react";
import { DeleteUser,GetUsers } from '../../services/userInfoServices'
import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import img1 from "../imgs/Default Profile.jpg";

function Users() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const navigate = useNavigate();

  // Get Users //
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await GetUsers();
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Delete User //
  const handleDeleteUser = async (userId) => {
    try {
      await DeleteUser(userId);

      const result = await GetUsers();
      setUsers(result.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="w-auto min-h-screen h-fit ml-[300px] flex justify-center max-[1590px]:ml-[120px] max-[1080px]:ml-0 max-[1080px]:mt-[60px]">
      <div className="flex flex-col">
        <div className="w-[880px] py-8 flex gap-[80px] items-center max-[1080px]:w-[750px] max-[1080px]:gap-[60px] max-[800px]:w-[650px] max-[690px]:w-[550px] max-[600px]:w-[450px] max-[600px]:gap-[15px] max-[480px]:w-[350px] max-[380px]:w-[300px]">
          <h1 className="text-[30px] font-bold">Users</h1>
        </div>
        <div className="w-[880px] h-[100%] flex flex-col gap-[20px] max-[1080px]:w-[750px] max-[800px]:w-[650px] max-[690px]:w-[550px]  max-[600px]:w-[450px] max-[480px]:w-[350px] max-[380px]:w-[300px]">
        {users.map(user => (
            <div className="flex items-center justify-between gap-[10px] p-[18px] pl-[14px] w-[450px] h-fit bg-colors-color1 rounded-[10px] border border-colors-color1 transition-all duration-200 max-[800px]:bg-colors-color2 max-[690px]:w-[320px] max-[380px]:w-[250px] hover:border-colors-color3">
              <div className="flex items-center gap-2" onClick={() => navigate(`/profile-details/${user.id}`)}>
                <img
                  src={user.profileImg ? `https://localhost:7018/Imgs/${user.profileImg}` : img1}
                  className="rounded-[50%] w-[40px] object-cover max-[380px]:w-[30px]"
                />
                <h1 className="font-bold max-[380px]:text-[12px]">{user.userName}</h1>
              </div>
              <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 px-[16px] py-[7px] rounded-[5px] transition-all duration-400 hover:opacity-65 max-[380px]:px-[12px] max-[380px]:py-[5px] max-[380px]:text-[12px]">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users
