import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StreamTweet from './StreamTweet';
import Header from './Header';

class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: null,
    };
  }

  componentDidMount() {
    console.log(
      '    SnapkiteStreamClient.initializeStream(\n'
        + '      this.handleNewTweet,\n'
        + '    );',
    );
  }

  componentWillUnmount() {
    console.log('SnapkiteStreamClient.destroyStream();');
  }

  handleNewTweet(tweet) {
    this.setState({
      tweet,
    });
  }

  render() {
    const { tweet } = this.state;

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={
            this.props.onAddTweetToCollection
          }
        />
      );
    }

    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  }
}

export default Stream;

Stream.propTypes = {
  onAddTweetToCollection: PropTypes.func.isRequired,
};
