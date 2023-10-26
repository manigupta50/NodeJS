// Please don't change the pre-written code
// Import the necessary modules here
import * as userModel from "../model/user.model.js"; 

export const registerUser = (req, res, next) => {
  // Write your code here
  const result = userModel.addUser(req.body);
  if(result) {
    return res.status(201).json({"status": "success", "user": result});
  }
  res.status(400).json({"status": "failure", "msg": "invalid user details"});
};

export const loginUser = (req, res) => {
  // Write your code here
  const { email, password } = req.body;
  const result = userModel.confirmLogin({ email, password});
  if(!result) {
    return res.status(400).json({"status": "failure", "msg": "invalid user details"});
  } 
  res.status(200).json({"status": "success", "msg": "login successful"});
};
