import React, { useState } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import Rules from './components/Rules.js';
import PrimaryGame from './components/PrimaryGame.js';
import GameOver from './components/GameOver.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
function App() {
  const [viewRules, setViewRules] = useState(true);
  const [playGame, setPlayGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    setViewRules(false);
    setPlayGame(true);
    setGameOver(false);
  }

  const endGame = () => {
    setPlayGame(false);
    setGameOver(true);
  }

  return (
    <Wrapper>
      <Reset />
      <GlobalStyle />
      {viewRules && <Rules handleClick={handleClick}/>}
      {playGame && <PrimaryGame endGame={endGame} />}
      {gameOver && <GameOver handleClick={handleClick}/>}
    </Wrapper>
  );
}

export default App;
