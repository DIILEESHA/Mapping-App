import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pinRoute from "./routes/pinner.js";

const app = express();
//config dotenv
dotenv.config();

app.use(express.json());
app.use("/pinner", pinRoute);

//connect mongoDB
mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, (req, res) => {
  console.log("Backend server run port 8000");
});
