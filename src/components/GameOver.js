import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const H2 = styled.div`
  font-size: 3em;
  margin: 20px 0;
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 8px;
  background: blue;
  color: white;
  letter-spacing: 1.2px;
  cursor: pointer;
  margin: 20px 0;
`;
// Function component
const GameOver = (props) => {
  return (
    <Container>
      <H2>GAME OVER</H2>
      {props.winner === 'player' ? 
        <H2>You win!</H2> :
        <H2>Computer wins...</H2>
    }
      <Button onClick={props.handleClick}>Play again</Button>
    </Container>
  )
}

// Type validation
GameOver.propTypes = {
  handleClick: PropTypes.func,
  winner: PropTypes.string,
}

export default GameOver;