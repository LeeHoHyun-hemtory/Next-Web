import { connectDB } from "/util/database";

export default async function handler(req, res) {
  const { title, content } = JSON.parse(req.body);

  try {
    if (title.length && content.length) {
      const client = await connectDB;
      const db = client.db("next-web");
      await db.collection("post").insertOne({
        title,
        content,
        createDate: new Date(),
      });

      res.status(200).redirect("/");
    } else {
      res.status(500).json("빈칸 채우셈");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
