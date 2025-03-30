import express from "express";
import { loginUser, registerUser } from "../controllers/controllers.user.js";

const router = express.Router();


router.post("/signup",registerUser);

router.post("/login",loginUser);


export default router;