const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  caption: {
    type: String,

    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});
