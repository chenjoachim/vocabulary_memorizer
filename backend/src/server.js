import express from "express";
import cors from "cors";
//import db from './db';
import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
import routes from "./routes";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("mongo db connection created"));
const app = express();
app.use(cors());
app.use("/", routes);
const port = process.env.PORT || 4000;
/*
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
