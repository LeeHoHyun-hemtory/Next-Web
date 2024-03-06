"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as STC from "./inputContainer.styled";
import Input from "@/components/Input";
import Txt from "@/components/Txt";
import Button from "@/components/Button";

const InputContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleOnClick = () => {
    fetch("/api/post/postList", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/board");
      }
    });
  };

  return (
    <STC.Container>
      <STC.TitleWrapper>
        <Txt content="Title" color="black" fontSize="30px" />

        <Input setVal={setTitle} />
      </STC.TitleWrapper>

      <STC.ContentWrapper>
        <Txt content="Content" color="black" fontSize="30px" />

        <Input setVal={setContent} />
      </STC.ContentWrapper>

      <STC.BtnWrapper>
        <Button handleOnClick={handleOnClick} content="추가" color="black" />
      </STC.BtnWrapper>
    </STC.Container>
  );
};

export default InputContainer;
