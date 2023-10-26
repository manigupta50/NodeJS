// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from 'express-validator';

export const formValidation = async (req, res, next) => {
  // Write your code here

  // Define Rules
  const rules = [
    body('name').isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('image').custom((value, {req}) => {
      if(!req.file) {
        throw new Error('Profile image is required');
      }
      return true;
    })
  ];

  // Run the rules
  await Promise.all(rules.map((rule) =>
    rule.run(req)
  ));

  // Check and Return the Errors if any Rules Fails
  var validationErrors = validationResult(req); // It will return an object
  if(!validationErrors.isEmpty()) {
    // console.log("validation" + validationErrors.array()[0].msg);
    return res.json(validationErrors.array()[0].msg);
  }
  next();
};
