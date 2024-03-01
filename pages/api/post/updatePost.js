import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

export default async function handler(req, res) {
  try {
    const { _id, title, content } = JSON.parse(req.body);

    const client = await connectDB;
    const db = client.db("next-web");
    await db.collection("post").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: { title, content },
      }
    );
    res.status(200).json("성공");
  } catch (error) {
    res.status(500).json(error);
  }
}
