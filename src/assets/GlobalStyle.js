import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  ::-webkit-scrollbar{
    display: none;
  }
`;

export default GlobalStyle;