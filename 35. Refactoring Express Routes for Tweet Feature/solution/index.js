import express from "express";
import {
  getTweets,
  createTweet,
} from "./src/features/tweet/tweet.controller.js";
import * as tweetRouter from "./src/features/tweet/tweet.routes.js";
const app = express();

// TODO: Refactor these route handlers into a separate routes file using express Router
app.use("/api/tweets", tweetRouter);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
