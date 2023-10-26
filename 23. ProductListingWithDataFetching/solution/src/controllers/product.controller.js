// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    const productModel1 = new ProductModel();
    const products = productModel1.fetchProducts();
    res.render('product', {products: products});
  };
}
