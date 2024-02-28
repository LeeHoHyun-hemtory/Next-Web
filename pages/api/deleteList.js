import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

export default async function handler(req, res) {
  const { _id } = JSON.parse(req.body);

  const client = await connectDB;
  const db = client.db("next-web");

  try {
    await db.collection("post").deleteOne({
      _id: new ObjectId(_id),
    });

    res.status(200).json("성공");
  } catch (error) {
    res.status(500).json(error);
  }
}
