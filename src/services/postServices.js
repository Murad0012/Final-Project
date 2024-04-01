import { httpClient } from '../utils/httpClient'

export const Create = (data) =>{
    return httpClient.post("Post/CreatePost",data,{headers:{
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
    }});
};