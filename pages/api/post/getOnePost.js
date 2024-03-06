import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("next-web");
    const result = await db.collection("post").findOne({
      _id: new ObjectId(req.query.id),
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
