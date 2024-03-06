"use client";

import styled from "styled-components";

export const Nav = styled.div`
  padding: 30px;
  margin-bottom: 50px;
  background: silver;

  & + & {
    margin-right: 50px;
  }
`;

export const Menu = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;
