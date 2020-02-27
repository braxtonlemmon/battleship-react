import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';


function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
    </div>
  );
}

export default App;
