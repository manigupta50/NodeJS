// Please don't change the pre-written code
// Import the necessary modules here
import * as UserModel from '../features/user/model/user.model.js';
import * as ProductModel from '../features/product/model/product.model.js'

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here

  // 1. Check if authorization header is empty.
  const authHeader = req.headers["authorization"];
  if(!authHeader) {
    return res.status(401).json({"success": false, "message": "no authorization details found"});
  }

  // 2. Extract Credentials. [Basic fxghjktyuiokjhg==]
  const base64Credentials = authHeader.replace('Basic ', '');

  // 3. Decode credentials
  const decodeCredentials = Buffer.from(base64Credentials, 'base64').toString('utf8'); // [username:password]
  
  const creds = decodeCredentials.split(':');
  const user = UserModel.getAllUsers().find(u => u.email === creds[0] && u.password === creds[1]);
  if(user) {
    res.status(200).json({"success": true, "products": ProductModel.fetchAllProducts()});
    next();
  } else {
    return res.status(401).json({"success": false, "message": "authorization failed"});
  }
};

export default basicAuthMiddleware;
