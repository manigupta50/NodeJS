// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

// Write your code here
const fsPromise = fs.promises;

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  try {
    const logData = `${new Date().toString()}\n req URL: ${req.url}\n reqBody: ${JSON.stringify(req.body)}\n\n`;
    await fsPromise.appendFile('log.txt', logData);
    next();
  } catch(err) {
    console.log(err);
  }
};
export default loggerMiddleware;
