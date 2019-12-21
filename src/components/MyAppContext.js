import React from 'react';

const MyAppContext = React.createContext({
    tweets: [],
    dateStamp: '444444',
    tweet: '',
    userName: "Danielle",
    addTweet: (tweet) => {}
});

export default MyAppContext;