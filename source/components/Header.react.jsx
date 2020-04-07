import React from 'react';

const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px',
};

const Header = React.createClass({
  getDefaultProps() {
    return {
      text: 'Default header',
    };
  },

  render() {
    return <h2 style={headerStyle}>{this.props.text}</h2>;
  },
});

export default Header;
