import React from 'react'
import './style.css'


// export default class Tweet extends React.Component {
//     // const { Tweet } = props;
//     constructor(props) {
//         super(props)
//     }
//         render(){
//     return (
//         <div className="Tweet">
//             {/* <p className="Tweet-user">User Name</p>
//             <p className="Tweet-time">Time stamp</p> */}
//     <p className="TweetText">{Tweet}</p>
//         </div>
//     )
// }}


export default function Tweet({tweet}) {
    return (
        <div className="Tweet">
          <p className="TweetText">{tweet} </p>
         </div>
    )
}