import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 486px;
  height: 100%;
  padding-top: 50px;
  background-color: #0f52ba;
  animation: drawer 400ms;
  @keyframes drawer {
    from {
      transform: translateX(30%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

export const CartHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  height: 80px;

  p {
    font-size: 27px;
    font-family: "Montserrat";
    font-weight: 700;
    color: #ffffff;
  }

  button {
    width: 38px;
    height: 38px;
    border: none;
    background-color: #000000;
    color: #ffffff;
    border-radius: 50%;
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const CartContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  gap: 20px;
  overflow-y: scroll;
  padding: 25px 0;

  .price-content {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .close {
    width: 18px;
    height: 18px;
    background-color: #000000;
    border-radius: 50%;
    color: #ffffff;
    border: none;
    position: absolute;
    right: 0;
    margin: 0 0 80px 0;

    @media (max-width: 600px) {
      width: 45.922px;
      height: 45.922px;
      background-color: #000000;
      border-radius: 50%;
      color: #ffffff;
      border: none;
      position: absolute;
      right: 30px;
      margin: 0 0 190px 0;
    }
  }

  .count {
    display: flex;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    width: 50px;
    height: 20px;
    justify-content: space-around;
    align-items: center;
    padding: 10px 2px;
    width: 50px;

    button {
      border: none;
      background-color: transparent;
      color: #000;
      cursor: pointer;
      font-family: "Montserrat";
      font-size: 18px;
      font-weight: 400;
    }

    span {
      width: 0.3px;
      height: 11.5px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  width: 80%;
  padding: 35px 0;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: "Montserrat";
  font-size: 28px;
  font-weight: 700;
`;

export const EndCartContent = styled.button`
  width: 100%;
  height: 97px;
  background: #000;
  border: none;
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 28px;
  font-weight: 700;
`;
