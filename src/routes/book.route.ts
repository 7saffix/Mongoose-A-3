import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  getSingleBook,
  updateBook,
} from "../controller/book.controllers";

export const bookRouter = Router();

bookRouter.post("/", createBook);
bookRouter.get("/", getAllBook);
bookRouter.get("/:bookId", getSingleBook);
bookRouter.put("/:bookId", updateBook);
bookRouter.delete("/:bookId", deleteBook);
