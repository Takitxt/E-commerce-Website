import Product from "../models/models.product.js";

export const createProduct = async (req,res) => {
    try {
        const {
            name,
            description,
            price,
            brand,
            category,
            stock,
            images,
            
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            brand,
            category,
            stock,
            images,
            
        });
        await product.save()


        res.status(200).json({
            success:true,
            message: "Product Created",
            product

        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Cannot create the product",
            error: error.message

        })

        
    }

}
