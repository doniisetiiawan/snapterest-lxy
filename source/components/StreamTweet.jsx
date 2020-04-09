import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      numberOfCharactersIsIncreasing: null,
      headerText: null,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    console.log(
      '[Snapterest] StreamTweet: 2. Running componentWillMount()',
    );

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter',
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1,
    };
  }

  componentDidMount() {
    console.log(
      '[Snapterest] StreamTweet: 3. Running componentDidMount()',
    );

    console.log(
      'const componentDOMRepresentation = ReactDOM.findDOMNode(\n'
        + '      this,\n'
        + '    );\n'
        + '    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;\n'
        + '    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;',
    );
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(
      '[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()',
    );

    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    const isNumberOfCharactersIncreasing = nextTweetLength > currentTweetLength;
    let headerText;

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText,
    });

    window.snapterest.numberOfReceivedTweets++;
  }

  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()',
    );

    return nextProps.tweet.text.length > 1;
  }

  // eslint-disable-next-line camelcase,no-unused-vars
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Snapterest] StreamTweet: 6. Running componentWillUpdate()',
    );
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState) {
    console.log(
      '[Snapterest] StreamTweet: 7. Running componentDidUpdate()',
    );

    window.snapterest.numberOfDisplayedTweets++;
  }

  componentWillUnmount() {
    console.log(
      '[Snapterest] StreamTweet: 8. Running componentWillUnmount()',
    );

    delete window.snapterest;
  }

  render() {
    console.log(
      '[Snapterest] StreamTweet: Running render()',
    );
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet;

StreamTweet.propTypes = {
  onAddTweetToCollection: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tweet: PropTypes.array,
};

StreamTweet.defaultProps = {
  tweet: [],
};
