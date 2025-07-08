import { Model, model, Schema } from "mongoose";
import { IBook, IBookMethod } from "../interface/book.interface";

const bookSchema = new Schema<IBook, Model<IBook>, IBookMethod>(
  {
    title: { type: String, required: [true, "book title required"] },
    author: { type: String, required: [true, "author name required"] },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: [true, "isbn required"], unique: true },
    description: { type: String },
    copies: {
      type: Number,
      required: true,
      min: [1, "Copies must be a positive number"],
    },
    available: { type: Boolean, default: true },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.method("updateAvailable", function (): void {
  this.available = this.copies > 0;
});

bookSchema.pre("save", function (next) {
  this.available = this.copies > 0;
  next();
});

export const Book = model("book", bookSchema);
