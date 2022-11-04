const PostModel = require("../models/PostModel");

const PostsGetItems = async (req, res) => {
  const queryObj = { ...req.query };
  console.log(queryObj);
  const excludedFields = ["_sort", "_order"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let Posts;
  if (req.query._sort != undefined && req.query._order != undefined) {
    if (req.query._order == "asc") {
      Posts = PostModel.find(queryObj).sort(req.query._sort);
      // res.send(Posts);
    } else {
      Posts = PostModel.find(queryObj).sort(`-${req.query._sort}`);
      // res.send(Posts);
    }
  } else {
    Posts = PostModel.find(queryObj);
    // res.send(Posts);
    // return;
  }
  ////
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  let result = await Posts.skip(skip).limit(limit);

  return res.status(200).send(result);
};

const PostsPostItems = async (req, res) => {
  const { name, score, difficulty } = req.body;
  const obj = new PostModel({ name, score, difficulty });
  const r = await obj.save();
  res.send(r);
};
module.exports = { PostsGetItems, PostsPostItems };
