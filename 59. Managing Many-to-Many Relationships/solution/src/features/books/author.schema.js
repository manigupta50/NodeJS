// Import necessary modules here
import mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema({
    // Write your code here
    name: {
        required: true,
        type: String
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
});
