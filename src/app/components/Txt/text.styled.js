"use client";

import styled, { css } from "styled-components";

export const Text = styled.div`
  ${(props) => css`
    color: ${props.color};
    font-size: ${props.fontSize};
    margin: ${props.margin};
  `}
`;
