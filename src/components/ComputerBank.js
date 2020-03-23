import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EnemyShip from './EnemyShip.js';

// Styled component
const TrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  grid-area: 1 / 1 / 3 / 2;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 2em;
`;

// Function component
const ComputerBank = (props) => {
  const enemyShips = props.ships.map(shipData => {
    return (
      <EnemyShip
        key={shipData.ship.id}
        id={shipData.ship.id}
        sunk={shipData.ship.isSunk()}
      />
    )
  })
  
  return (
    <TrackingContainer>
      <H2>Enemy Ships</H2>
      { enemyShips }
    </TrackingContainer>
  )
}

// Type validation
ComputerBank.propTypes = {
  ships: PropTypes.array,
}

export  default ComputerBank;