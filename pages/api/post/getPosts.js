import { connectDB } from "/util/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("next-web");
    const result = await db.collection("post").find().toArray();

    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json(error);
  }
}
