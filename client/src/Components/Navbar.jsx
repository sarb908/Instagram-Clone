import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex justify={"space-around"}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"signUp"}>SignUp</Link>
    </Flex>
  );
};

export default Navbar;
