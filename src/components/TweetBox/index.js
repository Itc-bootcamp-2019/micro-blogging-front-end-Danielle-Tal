import React from 'react'
import './style.css'
import MyAppContext from '../MyAppContext'

class TweetBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweet: "",
            lengthValid: true,
            errorMessage: false,
        }
    }

    handleChange(event) {
        this.setState({ tweet: event.target.value })
        if (this.state.tweet.length > 140) {
            this.setState({ lengthValid: false });
            this.setState({ errorMessage: true });
        } else {
            this.setState({ lengthValid: true });
            this.setState({ errorMessage: false });
        }
    }

    render() {
        const { tweet } = this.state;
        return (
            <MyAppContext.Consumer>
                {({ addTweet }) => (
                    <div>
                        <textarea className="createTweetText TweetBox" placeholder="What you have in mind..."
                            onChange={(event) => this.handleChange(event)}>
                        </textarea>
                        {this.state.errorMessage && <div className="errormessege" ><p className="error-messege-text">The tweet can't contain more then 140 chars</p></div>}
                        <button type="submit" className="createTweetButton buttonText" disabled={!this.state.lengthValid}
                            onClick={() => addTweet(tweet)} >Tweet</button>
                    </div>)}
            </MyAppContext.Consumer>
        )
    }
}

export default TweetBox;
