import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RULES = [
  'Welcome to Battleship! The game is played with two players. To setup the game, each player places five ships of varying lengths on a personal gameboard. Ships can be positioned horizontally or vertically on the board. They may touch, but may not occupy the same area. All ships must remain within the gameboard boundaries.',

  'Players alternate taking turns. On a turn, a player attacks the opponent\'s gameboard by clicking on an unoccupied square. If the attacks hits an enemy ship, the square will turn red. Otherwise, the attack is considered a miss and the square will turn orange.',

  'When a player sinks an enemy ship, the player will be notified. The game ends once one player has destroyed all enemy ships.'
];

// Styled component
const Step = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  margin: 20px 0;
`;

// Function component
const Rules = (props) => {
  const steps = RULES.map(step => {
    return <Step key={RULES.indexOf(step)}>{step}</Step>
  })

  return (
    <>
      <p>RULES</p>
      {steps}
      <button onClick={props.handleClick}>PLAY</button>
    </>
  )
}

// Type validation
Rules.propTypes = {
  handleClick: PropTypes.func
}

export default Rules;
