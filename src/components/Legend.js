import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background: lightgrey;
  padding: 10px;
  margin-top: 10px;
  h1 {
    margin-right: 20px;
  }
  p {
    margin-right: 5px;
  }
`;

const Box = styled.div`
  height: 2em;
  width: 2em;
  border: 2px solid black;
  margin-right: 5px;
  background: ${props =>
    props.blue
      ? "radial-gradient(closest-side, blue, lightblue)"
      : "radial-gradient(closest-side, red, pink)"};
`;

const Legend = () => {
  return (
    <Container>
      <h1>Legend</h1>
      <p>Miss</p>
      <Box blue></Box>
      <p>Hit</p>
      <Box red></Box>
    </Container>
  )
}

export default Legend;