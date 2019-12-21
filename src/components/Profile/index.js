import React from 'react'
import './style.css'
import MyAppContext from '../MyAppContext'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
        }
    }
    handleChange(event) {
        this.setState({ userName: event.target.value })
    }
    render(){
        const { userName } = this.state;
    return ( 
        <div >
            <h1 className = "profile-headline" > Profile </h1> 
            <label className = "user-name-lable" > User Name </label> 
            <textarea className = "user-name-input user-name-input-text"  value={userName}  
            onChange={(event) => this.handleChange(event)}> > </textarea> 
            <button className = "user-name-button user-button-text" type = "submit" 
            onClick = {() => localStorage.setItem('userName', userName)} > save </button> 
        </div> 
    )
}}

export default Profile;