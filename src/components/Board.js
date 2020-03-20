import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Tile from './Tile.js';
// Dnd stuff
import { ItemTypes } from '../ItemTypes.js';
import { useDrop } from 'react-dnd';
//////////

// Styled component
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 20em;
  height: 20em;
  border: 2px solid black;
  border: ${props => {
    return props.playerTurn ?
      (props.board.id === 0 ? '2px solid yellow' : '2px solid black') :
      (props.board.id === 0 ? '2px solid black' : '2px solid yellow')
  }};
  margin: 20px;
  background: ${props => {
    return props.board.id === 0 ? 'lightgrey' : 'lightblue';
  }};
  grid-area: ${props => {
    return props.board.id === 0 ? '2 / 2 / 3 / 3' : '1 / 2 / 2 / 3';
  }};
`;

// Function component
const Board = (props) => {
  const board = props.board;

  const generateBoard = (boardId) => {
    let tiles = [];
    board.board.forEach((row, y) => {
      row.forEach((square, x) => {
        tiles.push(
          <Tile 
            key={`${y}${x}`}
            // onClick={() => props.handleClick([y, x], board.id)}
            x={x}
            y={y}
            handleClick={props.handleClick}
            content={square === 'X' || square === 'M' ? 'true' : 'false'}
            square={square}
            boardId={boardId}
            id={board.id}
            handleDrop={props.handleDrop}
          />
        )
      })
    })
    return tiles;
  }

  return (
    <BoardContainer 
      board={props.board}
      playerTurn={props.playerTurn}
    >
      {generateBoard(props.board.id)}
    </BoardContainer>
  )
}

// Type validation
Board.propTypes = {
  board: PropTypes.object,
  handleClick: PropTypes.func,
  pShips: PropTypes.array,
  playerTurn: PropTypes.bool
}

export default Board;