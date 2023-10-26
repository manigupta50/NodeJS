import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        try {
            const result = await this.bookRepository.createBook(req.body);
            res.status(201).send(result);
        } catch(err) {
            console.log("Something went wrong.");
        }
    }

    // filtering of book by id
    getOne = async (req, res) => { 
        try {
            // const bookId = new mongoose.Types.ObjectId(req.param.bookId);
            const bookId = req.params.bookId;
            // console.log(bookId);
            const result = await this.bookRepository.getOne(bookId);
            // console.log("result: " + result);
            if(!result) {
                return res.status(404).send("Book not found.");
            } else {
                return res.status(200).send(result);
            }
        } catch(err) {
            console.log("Something went wrong.");
        }
    }

}
