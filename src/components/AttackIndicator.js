import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Indicator = styled.div`
  height: 0.8em;
  width: 0.8em;
  border-radius: 50%;
  border: 4px solid black;
  background: ${props => props.playerTurn ? 'yellow' : 'grey'};
  margin: 0 8px;
`;

const AttackIndicator = (props) => {
  return (
    <Container>
      <h2>ATTACK</h2>
      <Indicator playerTurn={props.playerTurn}></Indicator>
    </Container>
  )
}

AttackIndicator.propTypes = {
  playerTurn: PropTypes.bool
}

export default AttackIndicator;