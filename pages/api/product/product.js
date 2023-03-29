import connectMongo from "../../../utils/connectMongo";
import Product from "../../../models/productModel";

export default async function addTest(req, res) {
  try {
    await connectMongo();

    console.log("CREATING DOCUMENT");
    const product = await Product.create({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
    });
    console.log("CREATED DOCUMENT");

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
