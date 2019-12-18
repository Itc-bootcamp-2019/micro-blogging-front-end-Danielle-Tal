import React from 'react';
import './App.css';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import './components/Tweet';
import MyAppContext from './components/MyAppContext';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      addTweet: this.handleOnTweet.bind(this),
      isLoading:true,
      dateStamp: [],
    }
  }
 
  componentDidMount(){
    //update to if statement at the end
    localStorage.getItem('tweets') && this.setState({
    tweets: JSON.parse(localStorage.getItem('tweets')),
    // isLoading:false
    })
  }

  handleOnTweet(tweet) {
    const dateStamp = new Date().toISOString();
    this.setState.dateStamp = dateStamp;
    const { tweets } = this.state;
    const tweetarray = [tweet, ...tweets]
    this.setState({ tweets: tweetarray});
    localStorage.setItem('tweets', JSON.stringify(tweetarray));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyAppContext.Provider value = {this.state}>
            <TweetBox></TweetBox>
            <TweetList></TweetList>
          </MyAppContext.Provider>


        </header>
      </div>
    );
  }
}

export default App;
