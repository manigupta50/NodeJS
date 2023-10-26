import express from "express";
import empRoutes from "./routes/employee.route.js";
const app = express();
// Please don't change the pre-written code
// Import the necessary modules here
import cors from 'cors';
// Write your code here
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));
app.use("/api/v1/emp", empRoutes);

export default app;
