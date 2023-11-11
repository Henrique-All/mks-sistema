import styled from "styled-components";

// Button Common
export const CommonButton = styled.button`
  background-color: #0f52ba;
  color: #ffffff;
  width: 218px;
  height: 31.907px;
  border: none;
  color: #fff;
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  border-radius: 0 0 8px 8px;
  transition: all ease-in-out 400ms;

  &:active {
    background-color: rgba(15, 82, 188, 0.4);
  }
`;

// Card Title Common
export const CommonCardTitle = styled.p`
  color: #2c2c2c;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;
  width: 124px;
  height: 38px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// Card SubTitle Common
export const CommonCardDescription = styled.p`
  color: #2c2c2c;
  font-family: "Montserrat";
  font-size: 10px;
  font-weight: 300;
  width: 192px;
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// Card Common
export const CommonCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 217.562px;
  height: 285px;
  border-radius: 8px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  gap: 10px;
  transition: all ease-in-out 400ms;
  gap: 20px;

  .title {
    display: flex;
    padding: 0 20px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const CommonCardPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 26px;
  border-radius: 5px;
  background: #373737;
  color: #fff;
  font-family: "Montserrat";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  padding: 10px 35px;
`;

// Cart Card Commons
export const CommonCartCard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 200px;
    margin: 0;
    margin-top: 80px;
  }
`;

export const CommonCartNameProduct = styled.p`
  width: 113px;
  color: #2c2c2c;
  font-family: "Montserrat";
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const CommonCartPrice = styled.p`
  display: flex;

  width: 82px;
  color: #000;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;
