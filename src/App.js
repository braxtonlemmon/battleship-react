import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import PrimaryGame from './components/PrimaryGame.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
function App() {
  return (
    <Wrapper>
      <Reset />
      <GlobalStyle />
      <PrimaryGame />
    </Wrapper>
  );
}

export default App;
