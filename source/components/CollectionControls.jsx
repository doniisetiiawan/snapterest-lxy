import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';

class CollectionControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'new',
      isEditingName: false,
    };
  }

  getHeaderText() {
    const { numberOfTweetsInCollection } = this.props;
    let text = numberOfTweetsInCollection;

    if (numberOfTweetsInCollection === 1) {
      text = `${text} tweet in your`;
    } else {
      text = `${text} tweets in your`;
    }

    return (
      <span>
        {text}
        <strong>{this.state.name}</strong>
        collection
      </span>
    );
  }

  setCollectionName(name) {
    this.setState({
      name,
      isEditingName: false,
    });
  }

  toggleEditCollectionName() {
    this.setState((prevState) => ({
      isEditingName: !prevState.isEditingName,
    }));
  }

  render() {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          name={this.state.name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={
            this.toggleEditCollectionName
          }
        />
      );
    }
    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />

        <Button
          label="Empty collection"
          handleClick={
            this.props.onRemoveAllTweetsFromCollection
          }
        />

        <CollectionExportForm
          htmlMarkup={this.props.htmlMarkup}
        />
      </div>
    );
  }
}

export default CollectionControls;

CollectionControls.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlMarkup: PropTypes.any.isRequired,
  numberOfTweetsInCollection: PropTypes.number.isRequired,
  onRemoveAllTweetsFromCollection: PropTypes.func.isRequired,
};
