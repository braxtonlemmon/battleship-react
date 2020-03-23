import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Tile from './Tile.js';
import PlacingInstructions from './PlacingInstructions.js';

// Styled component
const BoardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 15em;
  height: 15em;
  border: 8px solid black;
  margin: 5px;
  background: ${props => {
    return props.board.id === 0 ? "lightgrey" : "#f1f3ff";
  }};
  grid-area: ${props => {
    return props.board.id === 0 ? '2 / 2 / 3 / 3' : '1 / 2 / 2 / 3';
  }};

  @media only screen and (min-width: 768px) {
    width: 20em;
    height: 20em;
  }
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
      {props.computer && !props.board.allShipsPlaced() && <PlacingInstructions />}
    </BoardContainer>
  )
}

// Type validation
Board.propTypes = {
  board: PropTypes.object,
  handleClick: PropTypes.func,
  handleDrop: PropTypes.func,
  pShips: PropTypes.array,
  playerTurn: PropTypes.bool,
  computer: PropTypes.any,
}

export default Board;