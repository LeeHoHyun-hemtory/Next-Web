"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 50px;
  }

  & > input {
    margin-top: 20px;
  }
`;

export const TitleWrapper = styled(Wrapper)``;

export const ContentWrapper = styled(Wrapper)``;

export const BtnWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: center;

  & > button {
    margin: 0 10px;
  }
`;

export const TextWrapper = styled(Wrapper)`
  margin-top: 20px;
  align-items: flex-start;
  border: solid 1px black;
  padding: 10px;
`;
