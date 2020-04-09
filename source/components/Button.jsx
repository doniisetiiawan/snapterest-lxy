import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '10px 10px 10px 0',
};

function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-default"
      style={buttonStyle}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
