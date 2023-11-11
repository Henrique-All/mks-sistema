import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 101px;
  background-color: #0f52ba;
  padding: 0 40px;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const NavMain = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    justify-content: space-between;
    align-items: center;

    img {
      width: 60px;
      height: 20px;
    }
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 50px;
    height: 45px;
  }
`;
