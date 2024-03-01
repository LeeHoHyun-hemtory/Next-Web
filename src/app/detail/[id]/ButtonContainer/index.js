"use client";

import { useRouter, useParams } from "next/navigation";
import * as STC from "./buttonContainer.styled";
import Button from "@/component/Button";

const index = () => {
  const router = useRouter();
  const params = useParams();

  const handleEdit = () => {
    router.push(`/edit/${params.id}`);
  };

  const handleDelete = () => {
    fetch("/api/post/deleteList", {
      method: "POST",
      body: JSON.stringify({ _id: params.id }),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/board");
      }
    });
  };

  return (
    <STC.Container>
      <Button
        handleOnClick={handleEdit}
        content="수정"
        color="#fff"
        background="#bbb"
        padding="10px 20px"
      />

      <Button
        handleOnClick={handleDelete}
        content="삭제"
        color="#fff"
        background="#bbb"
        padding="10px 20px"
      />
    </STC.Container>
  );
};

export default index;
