"use client";

import { useEffect, useState } from "react";
import ListItem from "@/components/ListItem";
import * as STC from "./list.styled";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/api/post/getPosts`)
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);

  return (
    <STC.Container>
      {list.map((el) => (
        <ListItem key={el._id} item={el} />
      ))}
    </STC.Container>
  );
};

export default List;
