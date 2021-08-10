import React from 'react';
import {
    Link
} from 'react-router-dom';
import './css/nav.scss';
import thtLogo from './pictures/tht logo.png';

export default function Navbar() {
    return (
        <div className="navbar navbar-default fixed-top navbar-expand-sm navbar-light bg-light">
            <div className="container navbar-container">
                <Link className="navbar-brand" to="/">
                    <img src={thtLogo} height="45" alt="tht-logo"/>
                </Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h3><Link className="nav-link" to="/rush">Rush</Link></h3>
                        </li>

                        <li className="nav-item">
                            <h3><Link className="nav-link" to="/members">Members</Link></h3>
                        </li>

                        <li className="nav-item">
                            <h3><Link className="nav-link" to="/faq">FAQ</Link></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}
