import React from "react";
import "./style.css";
import MyAppContext from "../MyAppContext";

const TweetList = props => {
  return (
    <MyAppContext.Consumer>
      {({ tweets }) =>
        tweets.map(tweet => (
          <div className="Tweet" key={tweet.userName + tweet.date}>
            <p className="Tweet-user">{tweet.userName}</p>
            <p className="Tweet-time"> {tweet.date}</p>
            <p className="TweetText">{tweet.content} </p>
          </div>
        ))
      }
    </MyAppContext.Consumer>
  );
};

export default TweetList;
