// Import the necessary modules here
import mongoose from "mongoose";

// Start creating your user schema here
export const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "name is required"],
        minLength: [3, "The name should be at least 3 characters long"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"],
        match: [/.+\@.+\../, "Please enter a valid email"]
    },
    mobile: {
        type: String,
        unique: true,
        required: [true, "mobile no. is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: 0,
        max: 100
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        enum: ['student', 'fresher', 'experienced']
    }
});