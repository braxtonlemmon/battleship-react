import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SHIPS from './SHIPS.js';
import { ItemTypes } from '../ItemTypes.js';
import { useDrag } from 'react-dnd';

// Styled components
const ShipContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => {
    if (props.pShips.includes(props.id)) {
      return 'none'; 
    } else {
      return SHIPS[props.id].color;
    }
  }};
  opacity: ${props => {
    return props.id === props.selectedId ? '0.4' : '1';
  }};
`;

const Cell = styled.div`
  border: 2px solid black;
  width: 2em;
  height: 2em;
`;

// Functional component
const Ship = props => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.SHIP },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  const generateShip = () => {
    let ship = [];
    for (let i = 0; i < props.length; i++) {
      ship.push(<Cell key={i}></Cell>);
    }
    return ship;
  };

  const handleClick = () => {
    props.setSelectedId(props.id);
    props.setLength(props.length);
  }

  return (
    <ShipContainer 
      ref={drag}
      onClick={handleClick}
      id={props.id}
      selectedId={props.selectedId}
      pShips={props.pShips}
    >
      {generateShip()}
    </ShipContainer>
  );
};

// Type validation
Ship.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  selectedId: PropTypes.number,
  length: PropTypes.number,
  setSelectedId: PropTypes.func,
  setLength: PropTypes.func,
  pShips: PropTypes.array
}

export default Ship;