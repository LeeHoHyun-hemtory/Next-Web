import React from "react";
import Text from "@/component/Text";
import * as STC from "./create.styled";
import InputContainer from "./InputContainer";

const Create = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Text content="Create" color="black" fontSize="50px" />
      </STC.Top>

      <InputContainer />
    </STC.Container>
  );
};

export default Create;
