import React from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';

const Stream = React.createClass({
  getInitialState() {
    return {
      tweet: null,
    };
  },

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(
      this.handleNewTweet,
    );
  },

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet(tweet) {
    this.setState({
      tweet,
    });
  },

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
  },
});

export default Stream;
