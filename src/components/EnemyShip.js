import React from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';
import PropTypes from 'prop-types';

// Styled component
const Ship = styled.div`
  text-align: center;
  margin: 5px 0;
  border: 1px solid black;
  background: ${props => props.sunk ? props.color : 'none'};
  width: ${props => `${props.length * 3.1}em`};
  font-size: 0.8em;
  padding: 5px 1px;
`;

// Function component
const EnemyShip = (props) => {
  const ship = SHIPS[props.id]; 
  return (
    <Ship 
      sunk={props.sunk}
      color={ship.color}
      length={ship.length}
    >
      {`${ship.name.toUpperCase()} (${ship.length})`}
    </Ship>
  )
}

// Type validation
EnemyShip.propTypes = {
  sunk: PropTypes.bool,
  id: PropTypes.number
}

export default EnemyShip;