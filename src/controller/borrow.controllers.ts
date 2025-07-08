import { Request, Response } from "express";
import { Book } from "../model/book.model";
import Borrow from "../model/borrow.model";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;
    const book = await Book.findById(bookId);

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "book not found!" });
    }
    if (book.copies < quantity) {
      return res
        .status(404)
        .json({ success: false, message: "Enough copies not available" });
    }

    if (book) {
      book.copies = book.copies - quantity;
      await book.save();
    }

    const borrowData = await Borrow.create({
      book: book._id,
      quantity,
      dueDate,
    });

    return res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrowData,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message.toString(),
      error,
    });
  }
};

export const getBorrowSummary = async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },

      {
        $lookup: {
          from: Book.collection.name,
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },

      { $unwind: "$bookDetails" },

      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Failed to retrieve summary" });
  }
};
