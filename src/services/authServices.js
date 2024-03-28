import { httpClient } from '../utils/httpClient'

export const Register = (data) =>{
    return httpClient.post("Account/Register",data);
};

export const Login = (data) =>{
    return httpClient.post("Account/Login",data);
};