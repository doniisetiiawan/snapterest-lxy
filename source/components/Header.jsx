import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px',
};

function Header(props) {
  return <h2 style={headerStyle}>{props.text}</h2>;
}

export default Header;

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Default header',
};
