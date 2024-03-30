import { httpClient } from '../utils/httpClient'

export const getUserDetailes = (id) =>{
    return httpClient.get(`Account/GetUserDetailes/${id}`);
};

export const UpdateUserDetailes = (userDetails) => {
    return httpClient.put(`Account/UpdateUser`, userDetails);
};