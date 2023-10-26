// Please don't change the pre-written code
// Import the necessary modules here
import { logger } from "./logger.middleware.js";

export class customErrorHandler extends Error {
  // Write your code here
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  if(err instanceof customErrorHandler) {
    logger.error(err.message);
    res.status(err.code).send(err.message);
  } else {
    logger.error("Oops! Something went wrong... Please try again later!");
    res.status(500).send("Oops! Something went wrong... Please try again later!");
  }
};
