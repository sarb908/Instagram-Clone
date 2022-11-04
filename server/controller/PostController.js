const express = require("express");
const { PostsGetItems, PostsPostItems } = require("../middlewares/posts");
const PostRouter = express.Router();

PostRouter.get("/", PostsGetItems);
PostRouter.post("/", PostsPostItems);

module.exports = PostRouter;
