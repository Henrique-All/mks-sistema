import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 938px;
  height: 601px;
  gap: 18px;
  margin: auto;
  margin-top: 128px;

  @media (max-width: 700px) {
    justify-content: center;
    width: 400px;
    height: 601px;
    margin: auto;
    margin-top: 80px;
  }

  @media (max-width: 350px) {
    width: 400px;
    height: 601px;
    margin: 0 0 0 -40px;
    margin-top: 80px;
  }

  .card-main {
    display: flex;
    width: 50%;
    height: 80%;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 900px) {
      width: 100vw;
      height: 100%;
      padding: 40px 0;
    }
  }
`;
