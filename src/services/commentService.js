import { httpClient } from '../utils/httpClient'

export const AddComment = (data) =>{
    return httpClient.post("Comment/AddComment",data);
};