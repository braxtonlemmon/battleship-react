import React from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';
import PropTypes from 'prop-types';

const PieceBox = styled.div`
  display: flex;
  flex-direction: ${props => {
    return props.orientation === 'horizontal' ? 'row' : 'column';
  }}; 
  justify-content: center;
  align-items: center;
  border: 1px solid black;
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

const ShowPiece = (props)  => {
  let tiles;
  const generateTiles = () => {
    tiles = [];
    const ship = SHIPS[props.selectedId];
    for (let i = 0; i < props.length; i++) {
      tiles.push(
        <Tile
          key={i}
          color={ship.color}
        >
          {i === 0 ? '*' : ''}
        </Tile>
      )
    }
    return tiles;
  }

  return (
    <PieceBox orientation={props.orientation}>
      { generateTiles() }
    </PieceBox>
  )
}

ShowPiece.propTypes = {
  selectedId: PropTypes.number,
  length: PropTypes.number,
  orientation: PropTypes.string
}

export default ShowPiece;