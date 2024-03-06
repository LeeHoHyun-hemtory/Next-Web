import React from "react";
import * as STC from "./text.styled";

const Txt = ({ content, color, fontSize, margin }) => {
  return (
    <STC.Text color={color} fontSize={fontSize} margin={margin}>
      {content}
    </STC.Text>
  );
};

export default Txt;
