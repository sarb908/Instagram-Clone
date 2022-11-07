const express = require("express");

const {
  PostsGetItems,
  PostsPostItems,
  PostsPatchItems,
  PostsDeleteItems,
} = require("../middlewares/posts");
const PostRouter = express.Router();

PostRouter.post("/upload", PostsPostItems);
PostRouter.get("/posts", PostsGetItems);
PostRouter.patch("/posts/:id", PostsPatchItems);
PostRouter.delete("/posts/:id", PostsDeleteItems);
// PostRouter.post("/post/:id", (req, res) => {
//     const id = req.params.id;
//     // const

//     const obj = new PostModel({ name, score, difficulty });
//     const r = await obj.save();
// });

module.exports = PostRouter;
