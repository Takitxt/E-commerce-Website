import User from "../models/models.user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/utils.generateToken.js";

export const registerUser = async (req,res) => {
    try {
        const {name,email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists with this email"})
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });
        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),

            })
        }else{
            res.status(400).json({message:"Invalid user data"})
        }



    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        
    }
}
export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})

        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
        
    }
}
