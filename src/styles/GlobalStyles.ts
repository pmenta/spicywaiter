import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }
  body {
    background: #fafafa;
    color: #333;
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;

export const GlobalContainer = styled.div`
  width: calc(100% - 108px);
  max-width: 1440px;
  margin: 0 auto;

  padding: 44px 44px 42px 150px;
`;

export const ContentContainer = styled.main`
  margin-top: 52px;
`;
