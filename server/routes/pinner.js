import express from "express";
import Pinner from "../models/Pinner.js";

const router = express.Router();

//create pin
router.post("/", async(req, res) => {
  const pinner = new Pinner(req.body);
  try {
    const savePin =await pinner.save();
    res.status(200).json(savePin);
    console.log("Pin Successfully");
  } catch (err) {
    res.status(err);
  }
});

export default router;
