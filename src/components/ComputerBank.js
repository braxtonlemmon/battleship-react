import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EnemyShip from './EnemyShip.js';

const TrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 80%;
  width: 80%;
  grid-area: enemyBank;
`;

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
      { enemyShips }
    </TrackingContainer>
  )
}

ComputerBank.propTypes = {
  ships: PropTypes.array,
}

export  default ComputerBank;