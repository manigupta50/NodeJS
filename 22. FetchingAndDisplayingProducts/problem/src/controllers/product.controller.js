// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    const ProductModel1 = new ProductModel();
    let products = ProductModel1.fetchProducts();
    res.send(products);
  };
}
