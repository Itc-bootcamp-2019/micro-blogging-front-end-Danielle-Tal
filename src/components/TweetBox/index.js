import React from "react";
import "./style.css";
import MyAppContext from "../MyAppContext";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ""
    };
  }

  handleChange(event) {
    this.setState({ tweet: event.target.value });
  }

  render() {
    const { tweet } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet }) => (
          <div className="tweet-box-wrapper">
            <textarea
              className="createTweetText TweetBox"
              placeholder="What you have in mind..."
              value={tweet}
              onChange={event => this.handleChange(event)}
            ></textarea>
            {this.state.tweet.length > 140 && (
              <div className="errormessege">
                <p className="error-messege-text">
                  The tweet can't contain more then 140 chars
                </p>
              </div>
            )}
            <button
              type="submit"
              className="createTweetButton buttonText"
              disabled={
                this.state.tweet.length > 140 || this.state.tweet.length === 0
              }
              onClick={() => {
                addTweet(tweet);
                this.setState({ tweet: "" });
              }}
            >
              Tweet
            </button>
          </div>
        )}
      </MyAppContext.Consumer>
    );
  }
}

export default TweetBox;
