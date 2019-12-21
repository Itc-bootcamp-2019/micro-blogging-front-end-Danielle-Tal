import React from 'react';
import './style.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function NvBar() {
    return ( 
        <nav className="Nav-bar">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
      </nav>
    )
}