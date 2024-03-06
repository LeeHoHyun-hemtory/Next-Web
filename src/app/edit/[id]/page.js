import React from "react";
import Txt from "@/components/Txt";
import * as STC from "./edit.styled";
import InputContainer from "./InputContainer";

const Create = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Txt content="Edit" color="black" fontSize="50px" />
      </STC.Top>

      <InputContainer />
    </STC.Container>
  );
};

export default Create;
