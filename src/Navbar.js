import React from 'react';
import {
    Link
} from 'react-router-dom';
import './css/app.css'

export default function Navbar() {
    return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/members">Members</Link>
                <Link to="/faq">FAQ</Link>
            </div>
    );
}
