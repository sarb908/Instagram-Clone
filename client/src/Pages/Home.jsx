import React from "react";
import Sidebar from "../Components/Sidebar";
import { Flex } from "@chakra-ui/react";
import Post from "./../Components/Post";
const Home = () => {
  return (
    <Flex>
      <Sidebar />;
      <Post />
    </Flex>
  );
};

export default Home;
