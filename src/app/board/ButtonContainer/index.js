"use client";

import { useRouter } from "next/navigation";
import Button from "@/component/Button";

const index = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/create");
  };

  return (
    <Button
      handleOnClick={handleOnClick}
      content="추가"
      color="#fff"
      background="#bbb"
      padding="10px 20px"
    />
  );
};

export default index;
