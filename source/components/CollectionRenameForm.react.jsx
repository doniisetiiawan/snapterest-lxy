import React from 'react';
import Header from './Header.react';
import Button from './Button.react';

const inputStyle = {
  marginRight: '5px',
};

const CollectionRenameForm = React.createClass({
  getInitialState() {
    return {
      inputValue: this.props.name,
    };
  },

  setInputValue(inputValue) {
    this.setState({
      inputValue,
    });
  },

  handleInputValueChange(event) {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  },

  handleFormSubmit(event) {
    event.preventDefault();
    const collectionName = this.state.inputValue;
    this.props.onChangeCollectionName(collectionName);
  },

  handleFormCancel(event) {
    event.preventDefault();
    const collectionName = this.props.name;
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  },

  componentDidMount() {
    this.refs.collectionName.focus();
  },

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
  },
});

export default CollectionRenameForm;
