// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  const { jwtToken } = req.cookies;
  // 1. Read the token
  // const token = req.headers['authorization'];

  // // 2. If no token, return the error
  // if(!jwtToken) {
  //   return res.status(401).json({ success: false, msg: "error" });
  // }

  // 3. Check if token is valid, if not - return error, if Yes
  try {
    const payload = jwt.verify(jwtToken, 'SecretKey1234');
    next();
  }
  catch(err) {
    return res.status(401).json({ success: false, msg: "error" });
  }

  // 4. Call next middleware
};

export default jwtAuth;
