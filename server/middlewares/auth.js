const bcrypt = require("bcrypt");
const UserModel = require("./../models/UserModel");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  if (email && password && name) {
    bcrypt.hash(password, 6, async function (err, hash) {
      try {
        // Store hash in your password DB.
        if (err) {
          return res.status(400).send("try again");
        }
        const user = new UserModel({
          email,
          password: hash,
          name,
        });

        const r = await user.save();
        return res.send(r);
      } catch (err) {
        return res.status(400).send("invalid cred");
      }
    });
  } else {
    return res.status(400).send("invalid cred");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await UserModel.findOne({ email });
      console.log("user", user);

      bcrypt.compare(password, user.password, async function (err, result) {
        if (err || !result) {
          console.log(err);
          return res.status(400).send("try again");
        }
        jwt.sign(
          { _id: user._id, email: user.email },
          "shh",
          function (err, token) {
            if (err) {
              console.log(err);
              return res.status(400).send("try again");
            }
            console.log(token);
            return res.send({
              token,
              user: { name: user.name, userId: user._id },
            });
          }
        );
      });
    } else {
      return res.status(400).send("invalid creds");
    }
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const authentication = async (req, res, next) => {
  //  console.log(req.headers);
  try {
    const token = req.headers.token.split(" ")[1];
    jwt.verify(token, "shh", function (err, decoded) {
      if (err) {
        return res.status(400).send("please try again!!");
      }

      req.body.userId = decoded._id;
      console.log(decoded, "decoded"); // bar
      next();
    });
  } catch (err) {
    res.status(400).send("user is not logged in");
  }
};

//const authorisation = async () => {};

module.exports = { login, signup, authentication };
