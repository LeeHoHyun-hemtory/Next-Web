"use client";

import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => css`
    color: ${props.color};
    border: ${props.border};
  `}

  background: #bbb;
  padding: 10px 20px;
`;
