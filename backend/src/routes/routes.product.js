import express from "express";
import { createProduct } from "../controllers/controllers.product.js";
import protect from "../middleware/middleware.user.js";
import isAdmin from "../middleware/middleware.product.js";

const router = express.Router();

router.post("/",protect,isAdmin,createProduct);

export default router;