"use client";

import Link from "next/link";
import * as STC from "./ListItem.styled";

const ListItem = ({ item }) => {
  return (
    <Link href={`/detail/${item._id}`}>
      <STC.Container>{item.title}</STC.Container>
    </Link>
  );
};

export default ListItem;
