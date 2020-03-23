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
  border: 3px dashed black;
  width: 9em;
  height: 9em;
  @media only screen and (min-width: 768px) {
    width: 12em;
    height: 12em;
  }
`;

const Ship = styled.div`
  display: flex;
  flex-direction : ${props => {
    return props.orientation === 'horizontal' ? 'row' : 'column';
  }};
  cursor: pointer;
  border: 2px solid black;
`;

const Tile = styled.div`
  height: 1.5em;
  width: 1.5em;
  font-weight: bold;
  @media only screen and (min-width: 768px) {
    height: 2em;
    width: 2em;
  }
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
          {i === 0 ? "😜" : ""}
        </Tile>
      );
    }
    return tiles;
  }

  return (
    <PieceBox>
      {!props.pShips.includes(props.selectedId) && props.length > 0 &&
        <Ship 
          ref={drag} 
          orientation={props.orientation}
        >
          {generateTiles()}
        </Ship>
      }
    </PieceBox>
  );
}

// Type validation
ShowPiece.propTypes = {
  selectedId: PropTypes.number,
  length: PropTypes.number,
  orientation: PropTypes.string,
  pShips: PropTypes.array
}

export default ShowPiece;