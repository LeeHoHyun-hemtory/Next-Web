import Link from "next/link";
import React from "react";
import * as STC from "./nav.styled";

const navMenu = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Board",
    route: "/board",
  },
  {
    name: "Cards",
    route: "/cards",
  },
];

const Nav = () => {
  return (
    <STC.Nav>
      {navMenu.map((menu) => (
        <STC.Menu key={menu.name}>
          <Link className="Menu" href={menu.route}>
            {menu.name}
          </Link>
        </STC.Menu>
      ))}
    </STC.Nav>
  );
};

export default Nav;
