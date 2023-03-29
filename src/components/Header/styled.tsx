import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  > div:first-child {
    div {
      display: flex;
      align-items: center;

      h1 {
        margin-left: 14px;
        font-weight: bold;
      }
    }

    h2 {
      margin-top: 16px;

      font-size: 16px;
      color: #666666;
      font-weight: 500;
    }
  }

`;
