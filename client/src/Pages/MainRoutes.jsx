import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ReqAuth from "./ReqAuth";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
