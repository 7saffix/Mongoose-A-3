import { Request, Response } from "express";
import { Book } from "../model/book.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
      error,
    });
  }
};

export const getAllBook = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "asc",
      limit = 10,
    } = req.query;

    const sortOrder = sort == "asc" ? 1 : -1;

    const filterOrAllBook = filter ? { genre: filter } : {};

    const books = await Book.find(filterOrAllBook)
      .sort({ [sortBy as string]: sortOrder })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
      error,
    });
  }
};

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const updateData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Books updated successfully",
      data: updatedBook,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    await Book.findByIdAndDelete(bookId);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
    });
  }
};
