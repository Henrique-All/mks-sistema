import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 101px;
  background-color: #0f52ba;
  padding: 0 40px;
`;

export const NavMain = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 18px;
  }
`;
