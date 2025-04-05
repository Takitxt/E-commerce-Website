import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
      images: [
        {
          public_id: String,
          url: String,
        },
      ],
      ratings: {
        type: Number,
        default: 0,
      },
      reviews: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          rating: Number,
          comment: String,
        },
      ],
    },
    { timestamps: true }
  );

  const Product = mongoose.model("Product", productSchema);

  export default Product;