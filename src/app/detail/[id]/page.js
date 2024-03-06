import React from "react";
import Txt from "@/components/Txt";
import * as STC from "./detail.styled";
import ContentContainer from "./ContentContainer";
import ButtonContainer from "./ButtonContainer";

const Create = ({ params }) => {
  return (
    <STC.Container>
      <STC.Top>
        <Txt content="Content" color="black" fontSize="50px" />
      </STC.Top>

      <ContentContainer id={params.id} />

      <ButtonContainer />
    </STC.Container>
  );
};

export default Create;
