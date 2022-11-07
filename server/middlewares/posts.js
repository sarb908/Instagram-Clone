const PostModel = require("../models/PostModel");
const cloudinary = require("cloudinary");

const PostsGetItems = async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res.status(200).send(posts);
  } catch (err) {
    return res.send(400).send(err);
  }
};

const PostsPostItems = async (req, res) => {
  console.log(req);
  try {
    const { caption, userName, status, comments } = req.body;

    const files = req.files.photo;
    cloudinary.uploader.upload(files.tempFilePath, async (result, err) => {
      console.log(result);
      const post = new PostModel({
        userName,
        caption,
        img: result.url,
        status,
        comments,
      });
      const r = await post.save();
    });
    return res.send(r);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const PostsPatchItems = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, comments } = req.body;
    const r = await PostModel.findByIdAndUpdate(id, { comments, status });
    res.send(r);
  } catch (err) {
    res.status(400).send(err);
  }
};
const PostsDeleteItems = async (req, res) => {
  try {
    const id = req.params.id;
    const r = await PostModel.findByIdAndDelete(id);
    return res.send(r);
  } catch (err) {
    return res.status(400).send(err);
  }
};
module.exports = {
  PostsGetItems,
  PostsPostItems,
  PostsPatchItems,
  PostsDeleteItems,
};
