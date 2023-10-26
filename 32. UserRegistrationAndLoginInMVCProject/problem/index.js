// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here
const userControllers = new UserController();
app.get('/register', userControllers.getRegister);
app.post('/register', userControllers.addUser);
app.get('/login', userControllers.getLogin);
app.post('/login', userControllers.loginUser);
export default app;
