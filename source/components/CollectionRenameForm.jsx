/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Button from './Button';

const inputStyle = {
  marginRight: '5px',
};

class CollectionRenameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.name,
    };
  }

  componentDidMount() {
    this.refs.collectionName.focus();
  }

  setInputValue(inputValue) {
    this.setState({
      inputValue,
    });
  }

  handleInputValueChange(event) {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const collectionName = this.state.inputValue;
    this.props.onChangeCollectionName(collectionName);
  }

  handleFormCancel(event) {
    event.preventDefault();
    const collectionName = this.props.name;
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this.handleSubmit}
      >
        <Header text="Collection name:" />

        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref="collectionName"
          />
        </div>

        <Button
          label="Change"
          handleClick={this.handleFormSubmit}
        />
        <Button
          label="Cancel"
          handleClick={this.handleFormCancel}
        />
      </form>
    );
  }
}

export default CollectionRenameForm;

CollectionRenameForm.propTypes = {
  name: PropTypes.string.isRequired,
  onCancelCollectionNameChange: PropTypes.func.isRequired,
  onChangeCollectionName: PropTypes.func.isRequired,
};
