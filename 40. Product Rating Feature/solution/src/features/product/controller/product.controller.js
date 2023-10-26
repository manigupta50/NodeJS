// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const userId = req.query.userId;
  const productId = req.query.productId;
  const rating = req.query.rating;

  const error = rateProductModel(productId, userId, rating);
  if(error) {
    res.status(400).json({ success: false, msg: error });
  } else {
    const updatedProduct = fetchAllProducts().find(p => p.id == productId);
    console.log(updatedProduct);
    res.json({ success: true, product: updatedProduct });
  }
};
