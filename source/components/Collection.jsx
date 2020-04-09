import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component {
  getListOfTweetIds() {
    return Object.keys(this.props.tweets);
  }

  getNumberOfTweetsInCollection() {
    return this.getListOfTweetIds().length;
  }

  createHtmlMarkupStringOfTweetList() {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />,
    );

    const htmlMarkup = {
      html: htmlString,
    };

    return JSON.stringify(htmlMarkup);
  }

  render() {
    const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (numberOfTweetsInCollection > 0) {
      const { tweets } = this.props;
      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      const removeAllTweetsFromCollection = this.props
        .onRemoveAllTweetsFromCollection;
      const handleRemoveTweetFromCollection = this.props
        .onRemoveTweetFromCollection;

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={
              numberOfTweetsInCollection
            }
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={
              removeAllTweetsFromCollection
            }
          />

          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={
              handleRemoveTweetFromCollection
            }
          />
        </div>
      );
    }
    return <Header text="Your collection is empty" />;
  }
}

export default Collection;

Collection.propTypes = {
  onRemoveAllTweetsFromCollection: PropTypes.func.isRequired,
  onRemoveTweetFromCollection: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tweets: PropTypes.array,
};

Collection.defaultProps = {
  tweets: [],
};
