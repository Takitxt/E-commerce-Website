import express from "express";
import protect from "../middleware/middleware.user.js";
import { getUserProfile, loginUser, registerUser, updateProfile } from "../controllers/controllers.user.js";

const router = express.Router();


router.post("/signup",registerUser);

router.post("/login",loginUser);

router.get("/profile",protect,getUserProfile);
router.put("/profile",protect,updateProfile);



export default router;