import React from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';

const Ship = styled.div`
  text-align: center;
  padding: 5px;
  margin: 10px 0;
  border: 1px solid black;
  background: ${props => props.sunk ? props.color : 'none'};
`;

const EnemyShip = (props) => {
  const ship = SHIPS[props.id]; 
  return (
    <Ship 
      sunk={props.sunk}
      color={ship.color}
    >
      {`${ship.name.toUpperCase()} (${ship.length})`}
    </Ship>
  )
}
export default EnemyShip;