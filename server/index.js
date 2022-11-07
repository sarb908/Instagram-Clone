const express = require("express");
const cors = require("cors");
const conn = require("./config");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: "dwkzy50y7",
  api_key: "123192169838294",
  api_secret: "TFBYXpHsMggGIFHt4iDe9R1uSoc",
  secure: true,
});

const PostRouter = require("./controller/PostController");
const AuthRouter = require("./controller/AuthController");

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use("/", AuthRouter);
app.use("/", PostRouter);
app.get("/", (req, res) => res.send("Homepage"));

app.listen(process.env.PORT || 3000, () => {
  conn.then(() => console.log("db connected")).catch((err) => console.log(err));
  console.log("listening at 8080");
});
