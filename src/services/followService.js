import { httpClient } from '../utils/httpClient'

export const FollowUser = (followedId,userId) =>{
    return httpClient.post(`Relationship/Follow?followedId=${followedId}&userId=${userId}`);
};

export const UnFollowUser = (followedId,userId) =>{
    return httpClient.delete(`Relationship/Unfollow?followedId=${followedId}&userId=${userId}`);
};

export const CheckFollow = (followedId,userId) =>{
    return httpClient.get(`Relationship/CheckFollow?followedId=${followedId}&userId=${userId}`);
};