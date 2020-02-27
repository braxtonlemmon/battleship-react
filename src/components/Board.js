import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  width: 20em;
  height: 20em;
  border: 2px solid black;
  margin: 20px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  border: 1px solid yellow;
`

const Tile = styled.div`
  height: 100%;
  width: 100%;
  background: red;
  border: 1px solid black;
`

const generateTiles = () => {
  let tiles = [];
  for (let i = 0; i < 10; i++) {
    tiles.push(<Tile />);
  }
  return tiles;
};

const generateRows = () => {
  let rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(<Row key={i}>{generateTiles()}</Row>);
  }
  return rows;
};

const Board = () => {

  return (
    <BoardContainer>
      {generateRows()}
    </BoardContainer>
  )
}

export default Board;