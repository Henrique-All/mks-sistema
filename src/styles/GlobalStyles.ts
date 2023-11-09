import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }


  html {
    background: #f9f9f9;
     // Scroll
  ::-webkit-scrollbar {
    width: 0px;

  }

  body {
    overflow-x: hidden;
  }
  }
`;
