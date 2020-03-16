import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    background: grey;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`

export default GlobalStyle;