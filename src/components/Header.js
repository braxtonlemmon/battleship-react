import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3em;
  text-shadow: 1px 2px yellow;
  margin: 10px;
`;

const Header = () => {
  return (
    <H1>Battleship</H1>
  )
}

export default Header;