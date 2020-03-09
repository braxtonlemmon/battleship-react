import React from 'react';
import styled from 'styled-components';
import Ship from "./ShipDisplay.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1 px solid green;
  width: 100%;
  margin-top: 20px;
`;

const ShipRow = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  width: 100%;
  padding: 5px 15px;
`;

const ships = [
  { name: "carrier",    id: 0, length: 5 },
  { name: "battleship", id: 1, length: 4 },
  { name: "cruiser",    id: 2, length: 3 },
  { name: "submarine",  id: 3, length: 3 },
  { name: "destroyer",  id: 4, length: 2 }
];
  
const ShipsContainer = (props) => {
  
  const generateShips = () => {
    return ships.map(ship => {
      return (
        <ShipRow key={ship.id}>
          <Ship
            key={ship.id}
            id={ship.id}
            length={ship.length}
            setSelectedId={props.setSelectedId}
            setLength={props.setLength}
            selectedId={props.selectedId}
          />
          <h2>{ship.name.toUpperCase()}</h2>
        </ShipRow>
      );
    });
  };

  return (
    <Container>
      { generateShips() }
    </Container>
  )
}

export default ShipsContainer;