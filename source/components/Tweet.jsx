import PropTypes from 'prop-types';
import React, { Component } from 'react';

const tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px',
};

const imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff',
};

class Tweet extends Component {
  handleImageClick() {
    const { tweet } = this.props;
    const { onImageClick } = this.props;

    if (onImageClick) {
      onImageClick(tweet);
    }
  }

  render() {
    const { tweet } = this.props;
    const tweetMediaUrl = tweet.media[0].url;
    return (
      <div style={tweetStyle}>
        <img
          src={tweetMediaUrl}
          onClick={this.handleImageClick}
          style={imageStyle}
          alt="image"
        />
      </div>
    );
  }
}

export default Tweet;

Tweet.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tweet: PropTypes.array,
};

Tweet.defaultProps = {
  tweet: [],
};
