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

};

export const deleteProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const product = Product.findByIdAndDelete(productId);
        if(!product){
            res.status(404).json({
                success:false,
                message:"Product not found"

            });
        };
        res.status(200).json({
            success:true,
            message:"Product successfully Deleted"

        });

    } catch (error) {
        
        console.error("Error deleting product:", error.message);
        res.status(500).json({
        success: false,
        message: "Error deleting product",
        error: error.message,
        });
        
        
    }
};

export const updateProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true,
        });
        if(!updatedProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        };
        res.status(200).json({
            success:true,
            message:"Product Updated Successfully",
            product:updatedProduct,
        })
        

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error.message,
        });
        
    }
}