import { Router } from "express";
import { borrowBook, getBorrowSummary } from "../controller/borrow.controllers";

export const borrowRouter = Router();

borrowRouter.post("/", borrowBook);
borrowRouter.get("/", getBorrowSummary);
