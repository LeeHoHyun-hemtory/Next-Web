import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("next-web");
    const result = await db.collection("post").findOne({
      _id: new ObjectId("65ded08cac500fc22b486554"),
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
