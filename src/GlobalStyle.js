import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    background: url('https://images.pexels.com/photos/734973/pexels-photo-734973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`

export default GlobalStyle;