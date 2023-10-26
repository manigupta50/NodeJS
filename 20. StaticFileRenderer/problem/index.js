// Please don't change the pre-written code

const express = require("express");
const server = express();

const renderStatic = (server, path) => {
  // Write your code here
  server.use(express.static(path));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic(server, 'public');

module.exports = { renderStatic, server };
