import { httpClient } from '../utils/httpClient'

export const Create = (data) =>{
    return httpClient.post("Post/CreatePost",data,{headers:{
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
    }});
};

export const getPostDetailes = (id) =>{
    return httpClient.get(`Post/GetPost/${id}`);
};

export const UpdatePost = (data) =>{
    return httpClient.put(`Post/UpdatePost/`,data);
};

export const DeletePost = (postId) => {
    return httpClient.delete(`Post/DeletePost/${postId}`);
};

export const GetExplorePosts = (userId) =>{
    return httpClient.get(`Post/Explore/${userId}`);
};

export const getPosts = () =>{
    return httpClient.get(`Post/GetPosts`);
};
