import express from "express";
import { createProduct, deleteProduct, updateProduct } from "../controllers/controllers.product.js";
import protect from "../middleware/middleware.user.js";
import isAdmin from "../middleware/middleware.product.js";

const router = express.Router();

router.post("/create",protect,isAdmin, createProduct);
router.delete("/delete/:id",protect,isAdmin, deleteProduct);
router.put("/update/:id",protect,isAdmin,updateProduct);

export default router;