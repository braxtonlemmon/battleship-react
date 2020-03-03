import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 20em;
  height: 20em;
  border: 2px solid black;
  margin: 20px;
  background: ${props => {
    return props.board.id === 0 ? 'yellow' : 'red';
  }};
`;

const Tile = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;



const Board = (props) => {
  const board = props.board;
  
  const generateBoard = () => {
    let tiles = [];
    board.board.forEach((row, y) => {
      row.forEach((square, x) => {
        tiles.push(
          <Tile 
            key={`${y}${x}`}
            onClick={() => props.handleClick([y, x], board.id)}
          >{square}</Tile>
        )
      })
    })
    return tiles;
  }

  return (
    <BoardContainer board={props.board}>
      {generateBoard()}
    </BoardContainer>
  )
}

export default Board;