import express, { Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { bookRouter } from "./routes/book.route";
import { borrowRouter } from "./routes/borrow.route";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the Library Management API!");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log("server is running at ", PORT);
});
