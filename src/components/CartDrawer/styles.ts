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
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  gap: 20px;
  overflow-y: scroll;
  padding: 25px 0;

  .count {
    display: flex;
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
