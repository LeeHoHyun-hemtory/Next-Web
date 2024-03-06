import ListItem from "../ListItem";
import { connectDB } from "/util/database";
import * as STC from "./list.styled";

const List = async () => {
  const client = await connectDB;
  const db = client.db("next-web");
  const result = JSON.parse(
    JSON.stringify(await db.collection("post").find().toArray())
  );

  return (
    <STC.Container>
      {result.map((el) => (
        <ListItem key={el._id} item={el} />
      ))}
    </STC.Container>
  );
};

export default List;
