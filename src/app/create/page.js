import React from "react";
import Txt from "@/components/Txt";
import * as STC from "./create.styled";
import InputContainer from "./InputContainer";

const Create = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Txt content="Create" color="black" fontSize="50px" />
      </STC.Top>

      <InputContainer />
    </STC.Container>
  );
};

export default Create;
