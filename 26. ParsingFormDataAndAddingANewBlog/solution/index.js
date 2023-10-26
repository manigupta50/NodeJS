// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import * as blogController from "./src/controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.get('/createblog', blogController.renderBlogForm);
app.use(express.urlencoded({ extended: true})); // To Parse Form Data
app.get('/', blogController.renderBlogs);
app.post('/addblog', blogController.addBlog);

export default app;
