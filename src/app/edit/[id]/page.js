import React from "react";
import Text from "@/components/Text";
import * as STC from "./edit.styled";
import InputContainer from "./InputContainer";

const Create = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Text content="Edit" color="black" fontSize="50px" />
      </STC.Top>

      <InputContainer />
    </STC.Container>
  );
};

export default Create;
