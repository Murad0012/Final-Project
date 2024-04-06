import { httpClient } from '../utils/httpClient'

export const getUserDetailes = (id) =>{
    return httpClient.get(`Account/GetUserDetailes/${id}`);
};

export const UpdateUserDetailes = (userDetails) => {
    return httpClient.put(`Account/UpdateUser`, userDetails,{headers:{
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
    }});
};

export const GetNonFollowedUsers = (UserId) =>{
    return httpClient.get(`Relationship/GetNonFollowedUsers/${UserId}`);
};

export const SearchUser = (userName,filterType,userId) =>{
    return httpClient.get(`/Search/SearchUser?username=${userName}&filterType=${filterType}&userId=${userId}`);
};

export const DeleteUser = (userId) => {
    return httpClient.delete(`Account/DeleteUser?id=${userId}`);
};

export const GetUsers = (userId) => {
    return httpClient.get(`Account/GetUsers?id=${userId}`);
};