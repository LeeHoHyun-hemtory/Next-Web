import React from "react";
import Text from "@/components/Text";
import * as STC from "./detail.styled";
import ContentContainer from "./ContentContainer";
import ButtonContainer from "./ButtonContainer";

const Create = ({ params }) => {
  return (
    <STC.Container>
      <STC.Top>
        <Text content="Content" color="black" fontSize="50px" />
      </STC.Top>

      <ContentContainer id={params.id} />

      <ButtonContainer />
    </STC.Container>
  );
};

export default Create;
