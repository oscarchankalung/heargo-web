import React from "react";
import { Redirect } from "react-router";

export const Logout = ({setAuthToken}) => {
    localStorage.removeItem("authToken")
    setAuthToken(null)
  
    return (<Redirect to="/" />);
};
