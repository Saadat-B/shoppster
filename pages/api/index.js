import clientPromise from "../../lib/mongo";

export default async function index(req, res) {
  await clientPromise();

  res.json({
    message: "hi",
  });
}
