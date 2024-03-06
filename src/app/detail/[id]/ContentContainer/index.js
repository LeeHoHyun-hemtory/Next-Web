import { connectDB } from "/util/database";
import * as STC from "./contentContainer.styled";
import Text from "@/components/Text";
import { ObjectId } from "mongodb";

const InputContainer = async ({ id }) => {
  const client = await connectDB;
  const db = client.db("next-web");
  const result = await db.collection("post").findOne({ _id: new ObjectId(id) });

  return (
    <STC.Container>
      <STC.TitleWrapper>
        <Text content="Title" color="#000" fontSize="30px" />

        <STC.TextWrapper>
          <Text content={result.title} color="#000" fontSize="15px" />
        </STC.TextWrapper>
      </STC.TitleWrapper>

      <STC.ContentWrapper>
        <Text content="Content" color="#000" fontSize="30px" />

        <STC.TextWrapper>
          <Text content={result.content} color="#000" fontSize="15px" />
        </STC.TextWrapper>
      </STC.ContentWrapper>
    </STC.Container>
  );
};

export default InputContainer;
