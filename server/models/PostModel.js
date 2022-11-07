const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  img: {
    type: String,
  },
  userName: {
    type: String,
  },
  comments: {
    type: Array,
  },
  status: { type: Boolean },
});
const PostModel = mongoose.model("Post", dataSchema);
module.exports = PostModel;
