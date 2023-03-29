import connectMongo from "../../../utils/connectMongo";

import Product from "../../../models/productModel";

export default async function addTest(req, res) {
  try {
    await connectMongo();

    console.log("FINDING ALL DOCUMENTS");
    const product = await Product.find();
    console.log("FOUND ALL DOCUMENTS");

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
