"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const index = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/create");
  };

  return <Button handleOnClick={handleOnClick} content="추가" color="#000" />;
};

export default index;
