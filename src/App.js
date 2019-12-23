import React from "react";
import "./App.css";
import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";
import "./components/Tweet";
import MyAppContext from "./components/MyAppContext";
import { getTweetsList, createTweet } from "./lib/API";
import NavBar from "./components/NavBar/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnTweet.bind(this),
      isLoading: true,
      errorMessage: false,
      errorText: "",
      userName:"Name"
    };
  }

  getTweets() {
    getTweetsList().then(response => {
      const tweet = response.data.tweets;
      this.setState({ tweets: tweet, isLoading: false });
    });
  }

  componentDidMount() {
    this.getTweets(this);
    setInterval(() => {
      this.getTweets(this);
    }, 10000);
  }

  handleOnTweet(tweet) {
    const {userName} = this.state
    const tweetobj = {
      content: tweet,
      userName: (localStorage.getItem("userName")||userName),
      date: new Date().toISOString()
    };
    createTweet(tweetobj)
      .then(() => {
        const { tweets } = this.state;
        const tweetarray = [tweetobj, ...tweets];
        this.setState({ tweets: tweetarray });
      })
      // .catch(response => {
      //   console.log(response.response.data);
      //   this.setState({
      //     errorMessage: true,
      //     errorText: `Please insert a user name on the profile page`
      //   });
      };
  

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <header className="App-header">
              <MyAppContext.Provider value={this.state}>
                <NavBar></NavBar>
                <Route exact path="/">
                  <TweetBox></TweetBox>
                  {/* {this.state.errorMessage && (
                    <div className="errormessege">
                      <p className="error-messege-text">
                        {this.state.errorText}
                      </p>
                    </div>
                  )} */}
                  {this.state.isLoading && (
                    <img
                      className="loader"
                      src="http://pluspng.com/img-png/loader-png-22-jan-2015-23-46-3161-loader-6-png-22-jan-2015-23-46-3087-loader-7-png-22-jan-2015-23-46-3177-loader-8-png-22-jan-2015-23-46-3582-loader-9-png-504.png"
                      alt="loader"
                    ></img>
                  )}
                  <TweetList></TweetList>
                </Route>
                <Route path="/profile">
                  <Profile></Profile>
                </Route>
              </MyAppContext.Provider>
            </header>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
