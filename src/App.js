import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import Board from './components/Board.js';

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
      <Board player />
      <Board computer />
    </Wrapper>
  );
}

export default App;
