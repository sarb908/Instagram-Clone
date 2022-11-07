import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ReqAuth = ({ children }) => {
  const name = useSelector((state) => state.authReducer.name);
  if (name.length == 0) {
    return <Navigate to={"/signUp"} />;
  }

  return <>{children}</>;
};

export default ReqAuth;
