import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: grey;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`

export default GlobalStyle;