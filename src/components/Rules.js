import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RULES = [
  'Welcome to Battleship! You will be playing against a computer. To setup the game, each player places five ships of varying lengths on a personal gameboard by clicking or dragging. Ships can be positioned horizontally or vertically on the board. They may touch, but may not occupy the same area. All ships must remain within the gameboard boundaries.',

  'Players alternate taking turns. On a turn, a player attacks the opponent\'s gameboard by clicking on an unoccupied square. If the attacks hits an enemy ship, the square will turn red. Otherwise, the attack is considered a miss and the square will turn grey.',

  'When a player sinks an enemy ship, the player will be notified. The game ends once one player has destroyed all enemy ships.'
];

// Styled components
const H1 = styled.h1`
  font-size: 2em;
`;

const Step = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 70%;
  margin: 10px 0;
  padding: 10px;
  line-height: 1.2em;
  letter-spacing: 1px;
  background: #2519fc;
  color: white;
  font-weight: 300;
  border-radius: 30px;
  border: 3px solid black;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 1024px) {
    width: 40%;
  }
`;

const Button = styled.div`
  padding: 10px;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
  background: #c6c3ff;
`;

// Function component
const Rules = (props) => {
  const steps = RULES.map(step => {
    return <Step key={RULES.indexOf(step)}>{step}</Step>
  })

  return (
    <>
      <H1>RULES</H1>
      {steps}
      <Button onClick={props.handleClick}>PLAY</Button>
    </>
  )
}

// Type validation
Rules.propTypes = {
  handleClick: PropTypes.func
}

export default Rules;
