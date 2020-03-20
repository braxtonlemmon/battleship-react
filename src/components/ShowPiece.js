import React, { useState } from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';
import PropTypes from 'prop-types';
import { ItemTypes } from '../ItemTypes.js';
import { useDrag } from 'react-dnd';

// Styled components
const PieceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

const Ship = styled.div`
  display: flex;
  flex-direction : ${props => {
    return props.orientation === 'horizontal' ? 'row' : 'column';
  }};
  cursor: pointer;
`;

const Tile = styled.div`
  height: 2em;
  width: 2em;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
`;

// Functional component
const ShowPiece = (props)  => {
  const [position, setPosition] = useState(null);
  const id = props.selectedId;
  const length = props.length;
  const orientation = props.orientation;
  const [, drag] = useDrag({
    item: { 
      id,
      length,
      orientation,
      position,
      type: ItemTypes.SHIP
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  const handleMouseDown = (i) => {
    console.log(i);
    setPosition(i); 
  }

  let tiles;
  const generateTiles = () => {
    tiles = [];
    const ship = SHIPS[props.selectedId];
    for (let i = 0; i < props.length; i++) {
      tiles.push(
        <Tile
          key={i}
          color={ship.color}
          index={i}
          onMouseDown={() => handleMouseDown(i)}
        >
          {i === 0 ? '*' : ''}
        </Tile>
      )
    }
    return tiles;
  }

  return (
    <PieceBox>
      <Ship 
        ref={drag} 
        orientation={props.orientation}
      >
        {generateTiles()}
      </Ship>
    </PieceBox>
  );
}

// Type validation
ShowPiece.propTypes = {
  selectedId: PropTypes.number,
  length: PropTypes.number,
  orientation: PropTypes.string
}

export default ShowPiece;