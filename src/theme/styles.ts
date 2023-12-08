import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-weight: normal;
  }
`;
