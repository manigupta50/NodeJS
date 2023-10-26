// Please don't change the pre-written code
// make the necessary imports for creating book schema named 'bookSchema'
import mongoose, { Schema } from "mongoose";

// Start writing your code here

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other'],
        required: true,
    },
    copies: {
        type: Number,
        min: 1,
        required: true
    },
    availableCopies: {
        type: Number,
        min: 0,
        required: true
    }

})

export default bookSchema;
