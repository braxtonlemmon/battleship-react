import React from 'react';
import PropTypes from 'prop-types';

const GameOver = (props) => {
  return (
    <>
      <p>Game is Over</p>
      <button onClick={props.handleClick}>Play again</button>
    </>
  )
}

GameOver.propTypes = {
  handleClick: PropTypes.func
}

export default GameOver;