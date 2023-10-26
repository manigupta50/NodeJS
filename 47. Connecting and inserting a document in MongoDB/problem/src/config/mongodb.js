// 1. Import MongoDB Client
import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
let client;
// 2. Function to connect to the database
export const connectToMongoDB = () => {
    MongoClient.connect(url)
    .then(clientInst => {
        client = clientInst;
        console.log("DB connected");
    })
    .catch(err => {
        console.log(err);
    })
};

// 3. Function to access the database
export const getDB = () => {
    return client.db("confession");
};
