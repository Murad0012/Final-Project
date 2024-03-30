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