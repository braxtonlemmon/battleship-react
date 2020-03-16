import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Tile from './Tile.js';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 20em;
  height: 20em;
  border: 2px solid black;
  margin: 20px;
  background: ${props => {
    return props.board.id === 0 ? 'lightgrey' : 'lightblue';
  }};
`;

const Board = (props) => {
  const board = props.board;

  const generateBoard = (boardId) => {
    let tiles = [];
    board.board.forEach((row, y) => {
      row.forEach((square, x) => {
        tiles.push(
          <Tile 
            key={`${y}${x}`}
            onClick={() => props.handleClick([y, x], board.id)}
            content={square === 'X' || square === 'M' ? 'true' : 'false'}
            square={square}
            boardId={boardId}
          />
        )
      })
    })
    return tiles;
  }

  return (
    <BoardContainer board={props.board}>
      {generateBoard(props.board.id)}
    </BoardContainer>
  )
}

Board.propTypes = {
  board: PropTypes.object,
  handleClick: PropTypes.func,
  pShips: PropTypes.array
}

export default Board;