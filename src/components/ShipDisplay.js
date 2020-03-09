import React from 'react';
import styled from 'styled-components';

const ShipContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${props => (props.id === props.selectedId ? "yellow" : "none")};
`;

const Cell = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 20px;
`;

const Ship = props => {
  const generateShip = () => {
    let ship = [];
    for (let i = 0; i < props.length; i++) {
      ship.push(<Cell key={i}></Cell>);
    }
    return ship;
  };
  const handleClick = () => {
    props.setSelectedId(props.id);
    props.setLength(props.length);
  }
  return (
    <ShipContainer 
      onClick={handleClick}
      id={props.id}
      selectedId={props.selectedId}
    >
      {generateShip()}
    </ShipContainer>
  );
};

export default Ship;