import express, { Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log("server is running at ", PORT);
});
