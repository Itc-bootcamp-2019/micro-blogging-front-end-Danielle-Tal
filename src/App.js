import React from 'react';
import './App.css';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import './components/Tweet';
import MyAppContext from './components/MyAppContext';
import { getTweetsList, createTweet} from './lib/API';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      addTweet: this.handleOnTweet.bind(this),
      isLoading:true,
      errorMessage: false,
      errorText: '',
      }
    }
  
 
  componentDidMount(){
        getTweetsList().then(response => {
          const tweets = response.data.tweets;
          this.setState({ tweets: tweets, isLoading:false });
      })
    };

  handleOnTweet(tweet) {
    const tweetobj= {
      content: tweet,
      userName: 'Dani',
      date:new Date().toISOString(),}
    createTweet(tweetobj)
    .then(() => {
      const {tweets} = this.state;
    const tweetarray = [tweetobj, ...tweets]
    this.setState({ tweets: tweetarray})
    
  },
    )
    .catch(response => {
      console.log(response.response.data);
      this.setState({ errorMessage: true ,errorText: response.response.data });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <MyAppContext.Provider value = {this.state}>
            <TweetBox></TweetBox>
            {this.state.errorMessage && <div className="errormessege" ><p className="error-messege-text">{this.state.errorText}</p></div>}
            {this.state.isLoading && 
             <img className="loader" src="http://pluspng.com/img-png/loader-png-22-jan-2015-23-46-3161-loader-6-png-22-jan-2015-23-46-3087-loader-7-png-22-jan-2015-23-46-3177-loader-8-png-22-jan-2015-23-46-3582-loader-9-png-504.png" alt="loader"></img>}
            <TweetList>
            </TweetList>
          </MyAppContext.Provider>


        </header>
      </div>
    );
  }
}

export default App;
