import React from "react";
import Sidebar from "../Components/Sidebar";
import { Flex } from "@chakra-ui/react";
import Feeds from "./../Components/Feeds";
import Suggestions from "../Components/Suggestions";

const Home = () => {
  return (
    <Flex justify={"space-between"}>
      <Sidebar />

      <Feeds />
      <Suggestions />
    </Flex>
  );
};

export default Home;
