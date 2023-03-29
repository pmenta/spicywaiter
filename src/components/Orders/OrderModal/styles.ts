import styled from "styled-components";

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px); // MELHORAR SUPORTE PARA NAVEGADORES

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  max-width: 480px;
  width: 100%;

  padding: 40px 32px;

  background: #fff;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      border: 0;
    }
  }

  main {
    margin-top: 40px;

    > div:first-child {
      span {
        font-size: 14px;
      }

      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  footer {

  }
`;

export const OrderItem = styled.div`
  display: flex;

  margin-top: 20px;

  img {
    border-radius: 6px;
    object-fit: cover;
  }

  span {
    font-size: 14px;
    font-size: #666;
  }

  > span {
    display: block;
    min-width: 20px;

    margin-left: 12px;
  }

  > div {
    margin-left: 4px;

    strong {
      display: block;
      margin-bottom: 4px;
    }
  }

  & + div {
    margin-top: 25px;
  }
`;

export const OrderDetails = styled.section`
  margin-top: 32px;

  h2 {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .total {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;

  button {
    &.primary {
      background-color: #D73035;
      color: #fff;

      border-radius: 48px;
      border: 0;
      padding: 12px 44px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      transition: filter 0.2s ;

      &:hover {
        filter: brightness(.9);
      }
    }

    &.secondary {
      background: transparent;
      border: 0;
      color: #D73035;
      font-weight: bold;
      margin-top: 8px;


      &:hover {
        text-decoration: underline;
      }

      transform: translateY(-22.5%);
    }
  }
`;
