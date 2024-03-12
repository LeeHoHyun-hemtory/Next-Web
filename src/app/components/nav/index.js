"use client";

import Link from "next/link";
import * as STC from "./nav.styled";
import LoginContainer from "./LoginContainer";
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider>
      <STC.Nav>
        <STC.MenuWrapper>
          {navMenu.map((menu) => (
            <STC.Menu key={menu.name}>
              <Link className="Menu" href={menu.route}>
                {menu.name}
              </Link>
            </STC.Menu>
          ))}
        </STC.MenuWrapper>

        <LoginContainer />
      </STC.Nav>
    </SessionProvider>
  );
};

export default Nav;
