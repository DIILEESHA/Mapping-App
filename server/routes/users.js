import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
const router = express.Router();

//register

router.post("/register", async (req, res) => {
  //genarate pwd
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //new user
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    //save
    const user = await newuser.save();
    res.status(200).json(user);
    console.log("save new user");
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong username or password ");
    }

    //valid pwd
    const validpwd = await bcrypt.compare(req.body.password, user.password);
    if (!validpwd) {
      res.status(400).json("Wrong password or username");
    }
    res.status(200).json({ user });
    console.log("Login Success Alert");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
