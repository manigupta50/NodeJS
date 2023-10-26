// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    // 1. Create token
    const token = jwt.sign({userID: status.id, email: status.email}, 'SecretKey1234', {expiresIn: '1h'})

    // 2. Send token.
    res
      .status(201)
      .cookie('jwtToken', token, {maxAge: 900000, httpOnly: false})
      .json({ status: "success", msg: "login successfull", token});
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
