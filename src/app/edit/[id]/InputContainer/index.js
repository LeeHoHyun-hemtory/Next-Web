"use client";

import { useState } from "react";
import * as STC from "./inputContainer.styled";
import Input from "@/component/Input";
import Text from "@/component/Text";
import Button from "@/component/Button";

const InputContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <STC.Container>
      <STC.TitleWrapper>
        <Text content="Title" color="black" fontSize="30px" />

        <Input val={title} setVal={setTitle} />
      </STC.TitleWrapper>

      <STC.ContentWrapper>
        <Text content="Content" color="black" fontSize="30px" />

        <Input val={content} setVal={setContent} />
      </STC.ContentWrapper>

      <STC.BtnWrapper>
        <Button
          content="수정"
          color="black"
          background="#bbb"
          padding="10px 20px"
        />
      </STC.BtnWrapper>
    </STC.Container>
  );
};

export default InputContainer;
