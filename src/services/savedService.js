import { httpClient } from '../utils/httpClient'

export const SavedPost = (postId, userId) =>{
    return httpClient.post(`SavedPost/Save?postId=${postId}&userId=${userId}`);
};

export const UnSavedPost = (postId,userId) =>{
    return httpClient.delete(`SavedPost/Unsave?postId=${postId}&userId=${userId}`);
};

export const CheckSave = (postId,userId) =>{
    return httpClient.get(`SavedPost/CheckSave?postId=${postId}&userId=${userId}`);
};