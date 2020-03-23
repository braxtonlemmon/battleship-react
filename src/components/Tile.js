import React from 'react';
import styled from 'styled-components';
import SHIPS from './SHIPS.js';
import PropTypes from 'prop-types';
import { ItemTypes } from '../ItemTypes.js';
import { useDrop } from 'react-dnd';

// Styled component
const Cell = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  cursor: ${props => props.content === 'true' ? 'default' : 'pointer'};
  background: ${props => {
    if (props.square === 'X') return 'radial-gradient(red, pink)';
    if (props.square === 'M') return 'radial-gradient(blue, lightblue)';
    if (/[0-9]{2}/.test(props.square) && props.boardId === 0) return SHIPS[parseInt(props.square[0])].color;
    return 'none';
  }};
`;

const Tile = (props) => {
  // Dnd stuff
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: (item) => props.handleDrop([props.y, props.x], props.id, item.position),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }) 
  })
  /////
  return (
    <Cell 
      ref={drop}
      content={props.content}
      square={props.square}
      boardId={props.boardId}
      onClick={() => props.handleClick([props.y, props.x], props.id)}
    />
  )
}

Tile.propTypes = {
  content: PropTypes.string,
  square: PropTypes.any,
  boardId: PropTypes.number,
  handleClick: PropTypes.func,
  handleDrop: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
  id: PropTypes.number
}

export default Tile;