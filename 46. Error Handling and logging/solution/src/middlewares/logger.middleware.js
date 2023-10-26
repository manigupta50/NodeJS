// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

export const logger = winston.createLogger({
  // Write your code here
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "error.log"})]
});
