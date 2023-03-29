import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = models.Product || model("Product", productSchema);

export default Product;
