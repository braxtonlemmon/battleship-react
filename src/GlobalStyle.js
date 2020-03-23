import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    font-size: 20px;
    box-sizing: border-box;
    font-family: 'Londrina Solid', sans-serif;
    height: 100%;
  }

  body {
    margin: 0;
    background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    font-family: 'Londrina Solid', sans-serif;
  }
`;

export default GlobalStyle;