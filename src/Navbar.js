import React from 'react';
import {
    Link
} from 'react-router-dom';
import './css/nav.scss'

export default function Navbar() {
    return (
        <div className="nav">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/about">About Us</Link>
            <Link className="navbar-link" to="/rush">Rush</Link>
            <Link className="navbar-link" to="/members">Members</Link>
            <Link className="navbar-link" to="/faq">FAQ</Link>
        </div>
    );
}
