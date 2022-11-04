const express = require("express");
const cors = require("cors");
const conn = require("./config");
require("dotenv").config();

const PostRouter = require("./controller/PostController");
const AuthRouter = require("./controller/AuthController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", AuthRouter);
app.use("/data", PostRouter);
app.get("/", (req, res) => res.send("Homepage"));

app.listen(process.env.PORT || 3000, () => {
  conn.then(() => console.log("db connected")).catch((err) => console.log(err));
  console.log("listening at 8080");
});
