import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Tweet from './Tweet';

const listStyle = {
  padding: '0',
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none',
};

class TweetList extends Component {
  getTweetElement(tweetId) {
    const tweet = this.props.tweets[tweetId];
    const handleRemoveTweetFromCollection = this.props
      .onRemoveTweetFromCollection;
    let tweetElement;

    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection}
        />
      );
    } else {
      tweetElement = <Tweet tweet={tweet} />;
    }

    return (
      <li style={listItemStyle} key={tweet.id}>
        {tweetElement}
      </li>
    );
  }

  render() {
    const tweetElements = this.getListOfTweetIds().map(
      this.getTweetElement,
    );

    return (
      <div>
        <ul style={listStyle}>{tweetElements}</ul>
      </div>
    );
  }
}

export default TweetList;

TweetList.propTypes = {
  onRemoveTweetFromCollection: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tweets: PropTypes.array,
};

TweetList.defaultProps = {
  tweets: [],
};
