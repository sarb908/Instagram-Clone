import { Flex } from "@chakra-ui/react";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
const Loading = () => {
  const loading = useSelector((state) => state.appReducer.loading);
  const { signinLoading } = useSelector((state) => state.authReducer);
  if (loading || signinLoading) {
    return (
      <Flex
        justify="center"
        align={"center"}
        top="0"
        h="100vh"
        w="100vw"
        position="fixed"
        zIndex={99999}
        bg="white"
        opacity={0.6}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="76"
          visible={true}
        />
      </Flex>
    );
  }
  return <></>;
};

export default Loading;
