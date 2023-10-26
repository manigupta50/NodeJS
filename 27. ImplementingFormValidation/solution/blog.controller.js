// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const {title, description, image} = req.body;

  let errorsArr = [];
  if(!title || title.trim() == '') errorsArr.push('The title field should not be empty.');
  if(title.length < 3) errorsArr.push('The title field should contain at least 3 characters.');
  
  if(!description || description.trim() == '') errorsArr.push('The description field should not be empty.');
  if(description.length < 10) errorsArr.push('The description field should contain at least 10 characters.');

  try {
    const validUrl = new URL(image);
  } catch(err) {
    errorsArr.push('The image URL provided should be a valid URL.');
  }

  if(errorsArr.length > 0) return res.render('addBlog', { errors: errorsArr, success: false});

  res.status(201).render("addBlog", { errors: null, success: true });
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
