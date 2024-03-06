"use client";

import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => css`
    color: ${props.color};
    background: ${props.background};
    padding: ${props.padding};
    border: ${props.border};
  `}
`;
