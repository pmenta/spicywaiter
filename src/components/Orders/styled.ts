import styled from "styled-components";

export const OrdersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  min-width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;

    display: flex;
    align-items: center;

    gap: 8px;
  }

`;

export const OrdersContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 24px;

  gap: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    background-color: #FFF;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
    }

    transition: filter 0.3s;

    &:hover {
      filter: brightness(.95);
    }

    &:active {
      filter: brightness(.9);
    }
  }

`;
