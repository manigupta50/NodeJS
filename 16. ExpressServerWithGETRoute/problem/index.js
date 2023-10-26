// Please don't change the pre-written code
// Import the necessary modules here
const express = require('express');

// Write your code here
const server = express();
server.get('/', (req, res) => {
    res.send("Be a Coding Ninja.");
});

// server.listen(8080, () => {
//     console.log("Server started at port 8080");
// })

module.exports = { server };
