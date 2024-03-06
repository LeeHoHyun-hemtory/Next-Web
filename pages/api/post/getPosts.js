import { connectDB } from "/util/database";

export default async function handler(_, res) {
  try {
    const client = await connectDB;
    const db = client.db("next-web");
    const result = await db.collection("post").find().toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
