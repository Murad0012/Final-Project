import { httpClient } from '../utils/httpClient'

export const LikePost = (postId,userId) =>{
    return httpClient.post(`Like/Like?postId=${postId}&userId=${userId}`);
};

export const UnLikePost = (postId,userId) =>{
    return httpClient.delete(`Like/Unlike?postId=${postId}&userId=${userId}`);
};

export const CheckLike = (postId,userId) =>{
    return httpClient.get(`Like/CheckFollow?postId=${postId}&userId=${userId}`);
};