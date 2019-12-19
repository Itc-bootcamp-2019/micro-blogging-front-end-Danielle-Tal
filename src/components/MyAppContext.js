import React from 'react';

const MyAppContext = React.createContext({
    tweets: [],
    dateStamp: '444444',
    tweet: '',
    // rememberMe:false,
    // user: "Danielle",
    addTweet: (tweet) => { }
  });
  
  export default MyAppContext;