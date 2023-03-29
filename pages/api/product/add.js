import connectMongo from "../../../utils/connectMongo";
import Test from "../../../models/testModel";

export default async function addTest(req, res) {
  try {
    await connectMongo();

    console.log("CREATING DOCUMENT");
    const test = await Test.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
