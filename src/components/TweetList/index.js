import React from 'react'
import './style.css'
import Tweet from '../Tweet'
import MyAppContext from '../MyAppContext'

const TweetList = (props) => {
    return (
        <MyAppContext.Consumer>
            {({ tweets, dateStamp}) => (
                tweets.map(tweet => (
                        <div className="Tweet" > 
                            <p className = "Tweet-user">Danielle</p>
                            <p className="Tweet-time"> {dateStamp}</p>
                            <p className="TweetText" key={tweet}>{tweet} </p>
                        </div>
                )))}
        </MyAppContext.Consumer>
    )
}

export default TweetList;