// Make necessary imports here.
// Don't change the pre-written code.

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { authorSchema } from './author.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

const authorModel = mongoose.model('Author', authorSchema);
var ObjectId = mongoose.Types.ObjectId;


export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        }
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);

        book.reviews.push(savedReview._id);

        await book.save();

        return savedReview;

    }

    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }

    async updateBookAvailability(bookId, quantity) {

        console.log(bookId);
        const book = await booksModel.findById(bookId);

        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;

        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;

        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    // Complete the following four funtions.
    async createAuthor(authorData) { 
        try {
            const newAuthor = new authorModel(authorData);
            const savedAuthor = await newAuthor.save();
            return savedAuthor;
        } catch(err) {
            console.log(err);
        }
    }

    async addAuthorToBook(bookId, authorId) { 
        try {
            const book = await booksModel.findOneAndUpdate(
                { _id: new ObjectId(bookId) },
                { $push: { authors: new ObjectId(authorId) } },
                { new: true }
            ); // It can add duplicate value, need to work on validations

            const author = await authorModel.findOneAndUpdate(
                { _id: new ObjectId(authorId) },
                { $push: { books: new ObjectId(bookId) } },
                { new: true}
            );
            return { book, author };
        } catch(err) {
            console.log(err);
        }
    }

    async listAuthorsByBook(bookId) { 
        try {
            const book = await booksModel.findOne({ _id: new ObjectId(bookId) });
            console.log(book.authors);
            const authors = await authorModel.find({ _id: { $in: book.authors } });
            return authors;
        } catch(err) {
            console.log(err);
        }
    }

    async listBooksByAuthor(authorId) { 
        try {
            const author = await authorModel.findOne({ _id: new ObjectId(authorId) });
            const books = await booksModel.find({ _id: { $in: author.books } });
            return books;
        } catch(err) {
            console.log(err);
        }
    }
}