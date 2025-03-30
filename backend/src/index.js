import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/routes.user.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Parse incoming JSON data
app.use(cookieParser()); // Handle cookies




const PORT = process.env.PORT || 5000;

app.use("/api/users",userRoutes);



app.listen(PORT , () => {
    console.log("The app is running on port : "+PORT);
})




