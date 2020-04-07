import React from 'react';

const buttonStyle = {
  margin: '10px 10px 10px 0',
};

const Button = React.createClass({
  render() {
    return (
      <button
        type="button"
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}
      >
        {this.props.label}
      </button>
    );
  },
});

export default Button;
