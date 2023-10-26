// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { userSchema } from "./user.schema.js";

const UserModel = mongoose.model('User', userSchema);

export const userRegisterationRepo = async (userData) => {
  // Write your code here
  try {
    const newUser = new UserModel(userData);
    await newUser.save();
    return { success: true, res: newUser };
  } catch(err) {
    console.log(err);
    return { success: false, error: { msg: err, statusCode: 400 } };
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  try {
    const email = userData.email;
    const password = userData.password;
    const emailFind = await UserModel.findOne({ email });
    if(!emailFind) {
      return { success: false, error: { msg: "user not found", statusCode: 404 } };
    } else {
      const user = await bcrypt.compare(password, emailFind.password);
      if(!user) {
        return { success: false, error: { msg: "Incorrect Password", statusCode: 400 } };
      }
      return { success: true, res: emailFind };
    }    
  } catch(err) {
    console.log(err);
    return { success: false, error: { msg: err, statusCode: 400 } };
  }

};

export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try {
    const hashedPassword = await bcrypt.hash(newpassword, 12);
    let user = await UserModel.findById(_id);
    if(!user) {
      return { success: false, error: { msg: "user not found", statusCode: 404 } };
    } else {
      user.password = hashedPassword;
      await user.save();
      return { success: true, error: { msg: user, statusCode: 201 } };
    }
  } catch(err) {
    console.log(err);
    return { success: false, error: { msg: err, statusCode: 400 } };
  }
};