// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");

// Write your code here
const server = http.createServer((req, res) => {
    res.end('Response received at port 8080.');
});

server.listen(8080, () => {
    console.log('Running port at 8080');
});

module.exports = server;
