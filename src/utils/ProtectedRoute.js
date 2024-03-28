import React from 'react';
import { useSelector } from 'react-redux';
import accountSlice from '../redux/accountSlice';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouted({ children }){
    const { isLoggedIn } = useSelector((x) => x.account);
    if(!isLoggedIn) return <Navigate to={"/sign-in"}/>
    return children;
}