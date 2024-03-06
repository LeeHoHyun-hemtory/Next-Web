"use client";

import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;

  & + & {
    margin-left: 10px;
  }
`;
