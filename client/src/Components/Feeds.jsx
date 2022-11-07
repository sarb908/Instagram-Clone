import { Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsHandler } from "../Redux/AppReducer/actions";
import Post from "./Post";

const Feeds = () => {
  const posts = useSelector((state) => state.appReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts.length == 0) {
      dispatch(getPostsHandler());
    }
  }, []);
  return (
    <Flex direction={"column"} pt="15px">
      {posts.map((el) => <Post key={el?._id} item={el} />).reverse()}
    </Flex>
  );
};

export default Feeds;
