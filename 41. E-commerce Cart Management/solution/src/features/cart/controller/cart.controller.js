// Please don't change the pre-written code
// Import the necessary modules here
import * as CartModel from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const productId = req.query.productId;
  const quantity = req.query.quantity;
  
  const addNewItem = CartModel.addToCart(userId, productId, quantity);
  if(!addNewItem) {
    return res.status(400).json({ success: false, msg: 'failed to add to cart' });
  }
  return res.status(201).json({ success: true, msg: 'added to cart successfully' });
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const cartItemId = req.params.itemId;
  const userId = req.userId;
  const removeItem = CartModel.removeFromCart(userId, cartItemId);
  if(!removeItem) {
    return res.status(404).json({ success: false, msg: 'removing of the item failed' });
  }
  return res.json({ success: true, msg: 'item removed' });
};