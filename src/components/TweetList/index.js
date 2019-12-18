import React from 'react'
import './style.css'
import MyAppContext from '../MyAppContext'

const TweetList = (props) => {
    return (
        <MyAppContext.Consumer>
            {({ tweets}) => (
                tweets.map(tweet => (
                        <div className="Tweet" > 
                            <p className = "Tweet-user">Danielle</p>
                            <p className="Tweet-time"> dateStamp</p>
                            <p className="TweetText">{tweet.content} </p>
                        </div>
                )))}
        </MyAppContext.Consumer>
    )
}

export default TweetList;