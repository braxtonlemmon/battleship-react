import React from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';
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
`;

// const EnemyShip = styled.div`
//   text-align: center;
//   padding: 5px;
//   margin: 10px 0;
//   border: 1px solid black;
// `;

// const enemyShips = SHIPS.map(ship => {
//   return <EnemyShip key={ship.name}>{`${ship.name.toUpperCase()} (${ship.length})`}</EnemyShip>
// })

const ComputerBank = (props) => {
  const enemyShips = props.ships.map(shipData => {
    // const ship = SHIPS[shipData.ship.id];
    return (
      <EnemyShip
        key={shipData.ship.id}
        id={shipData.ship.id}
        sunk={shipData.ship.isSunk()}
      />
    )
    // return <EnemyShip key={shipData.ship.id} id={shipData.ship.id} sunk={shipData.ship.isSunk()}>H</EnemyShip>
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