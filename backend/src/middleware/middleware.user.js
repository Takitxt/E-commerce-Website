import jwt from "jsonwebtoken";
import User from "../models/models.user.js";
import dotenv from "dotenv";

dotenv.config();


const protect = async (req,res,next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.error("JWT Verification Error:", error.message);
            
            return res.status(401).json({ message: "Not authorized, invalid token" });
        }
        


    }else{
        return res.status(401).json({ message: "Not authorized, no token" });
    };
};

export default protect;
