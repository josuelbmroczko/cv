// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0a0a0a;
    color: #fff;
  
  }

  a {
    text-decoration: none;
    font-family: "Space Mono", monospace;
  font-weight: 700;   font-style: normal;
  }
`;

export default GlobalStyle;
