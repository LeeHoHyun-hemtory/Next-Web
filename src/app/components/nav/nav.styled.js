"use client";

import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-bottom: 50px;
  background: silver;

  & + & {
    margin-right: 50px;
  }
`;

export const MenuWrapper = styled.div``;

export const Menu = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;
