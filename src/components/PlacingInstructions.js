import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 5px;
  border: 1px solid black;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  p {
    margin: 4px 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.3em;
  }
`;

const PlacingInstructions = () => {
  return (
    <Container>
      <p>Click to select a ship from the Ship Bank.</p>
      <p>Choose horizontal or vertical.</p>
      <p>
        If using a touchscreen device, you must click a square on your board
        to add the piece (the emoji will land where you click).
      </p>
      <p>
        If using a mouse, you can also drag the piece from the dotted box onto
        your board.
      </p>
    </Container>
  );
}

export default PlacingInstructions;