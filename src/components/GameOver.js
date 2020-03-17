import React from 'react';
import PropTypes from 'prop-types';

// Function component
const GameOver = (props) => {
  return (
    <>
      <p>Game is Over</p>
      <button onClick={props.handleClick}>Play again</button>
    </>
  )
}

// Type validation
GameOver.propTypes = {
  handleClick: PropTypes.func
}

export default GameOver;