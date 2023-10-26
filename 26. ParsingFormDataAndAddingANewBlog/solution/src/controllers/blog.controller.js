// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from '../models/blog.model.js';

export const renderBlogs = (req, res) => {
  // Write your code here
  res.render('blogs', {blogsData: blogs});
};
export const renderBlogForm = (req, res) => {
  // Write your code here
  return res.render('addBlogForm');
};
export const addBlog = (req, res) => {
  // Write your code here
  blogs.push(req.body);
  return res.render('blogs', {blogsData: blogs});
};
