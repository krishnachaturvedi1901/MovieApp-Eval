import React,{useContext}from "react";
import { Navigate } from "react-router-dom";
import {Box} from "@chakra-ui/react"
import { AuthContext } from "../../Context/AuthContextProvider";
import LoginForm from "./LoginForm";

const Login = () => {
  const {isAuth}=useContext(AuthContext)
  if(isAuth){
    return <Navigate to="/"/>
  }
  return (
    <div>
       <div style={{width:"80%",margin:"auto"}}>
         <h1 style={{fontSize:"28px", fontWeight:"bold"}}>Login Form</h1>
         <LoginForm/>
       </div>
  </div>
  )
};

export default Login;