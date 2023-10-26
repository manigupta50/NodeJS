import express from "express";
import * as tweetController from "./tweet.controller.js";

const router = express.Router();

router.get("/", tweetController.getTweets);
router.post("/", tweetController.createTweet);

export default router;