"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import * as STC from "./inputContainer.styled";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Button from "@/components/Button";

const InputContainer = () => {
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = () => {
    if (title.length && content.length) {
      fetch("/api/post/updatePost", {
        method: "POST",
        body: JSON.stringify({
          _id: params.id,
          title,
          content,
        }),
      }).then((res) => {
        if (res.status === 200) {
          router.back();
        }
      });
    } else {
      alert("빈 칸을 모두 채우세요");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  useEffect(() => {
    fetch("/api/post/getOnePost")
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setContent(res.content);
      });
  }, []);

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
          handleOnClick={handleUpdate}
          content="수정"
          color="black"
          background="#bbb"
          padding="10px 20px"
        />

        <Button
          handleOnClick={handleCancel}
          content="취소"
          color="black"
          background="#bbb"
          padding="10px 20px"
        />
      </STC.BtnWrapper>
    </STC.Container>
  );
};

export default InputContainer;
