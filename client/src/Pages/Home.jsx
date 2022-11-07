import React from "react";
import Sidebar from "../Components/Sidebar";
import { Flex } from "@chakra-ui/react";
import Post from "./../Components/Post";
import Suggestions from "../Components/Suggestions";
const Home = () => {
  return (
    <Flex justify={"space-between"}>
      <Sidebar />
      <Post />
      <Suggestions />
    </Flex>
  );
};

export default Home;
