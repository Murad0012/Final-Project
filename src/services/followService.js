import { httpClient } from '../utils/httpClient'

export const FollowUser = (postId,userId) =>{
    return httpClient.post(`Relationship/Follow?postId=${postId}&userId=${userId}`);
};

export const UnFollowUser = (postId,userId) =>{
    return httpClient.delete(`Relationship/Unfollow?postId=${postId}&userId=${userId}`);
};

export const CheckFollow = (postId,userId) =>{
    return httpClient.get(`Relationship/CheckFollow?postId=${postId}&userId=${userId}`);
};