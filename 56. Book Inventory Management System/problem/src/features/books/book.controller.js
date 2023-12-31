//-----------pre-written code starts----------
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //---------------pre-written code ends-----------------

  // Complete the functions below:

  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    try {
      const genre = req.params.genre;
      const books = await this.bookRepository.listBooksByGenre(genre);
      if(!books) {
        res.status(404).send("books  not found.");
      } else {
        res.status(200).send(books);
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const { quantity } = req.body;
      const updatedDoc = await this.bookRepository.updateBookAvailability(bookId, quantity);
      if(!updatedDoc) {
        res.status(404).send("books not found.");
      } else {
        res.status(200).send(updatedDoc);
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: "Failed to update book" });
    }
  };

  //deletion of book
  // deleteBook = async (req, res) => {
  //   try {
  //     const { bookId } = req.params;
  //     const deletedBook = await this.bookRepository.deleteBookById(bookId);
  //     if(!deletedBook) {
  //       res.status(404).send("book not found.");
  //     } else {
  //       res.status(200).json({ message: "Book deleted." });
  //     }
  //   } catch(err) {
  //     console.log(err);
  //     res.status(500).json({ error: "Failed to delete book" });
  //   }
  // };

  deleteBook = async (req, res) => {
    const { bookId } = req.params;

    try {
      const deletedBook = await this.bookRepository.deleteBookById(bookId);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json({ message: "Book deleted" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to delete book" });
    }
  };
}
