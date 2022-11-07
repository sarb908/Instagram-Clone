import { Input, Flex, Img } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "./../Assets/InstaLogo.png";
const MobileNavbar = () => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      gap="10"
      p="0 10px"
      display={["flex", "flex", "none"]}
    >
      <Img src={logo} />
      <Input placeholder="Search" />
      <AiOutlineHeart size={100} />
    </Flex>
  );
};

export default MobileNavbar;
