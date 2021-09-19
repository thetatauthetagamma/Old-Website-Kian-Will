import React from "react";
import { Link } from "react-router-dom";
import "./css/nav.scss";
import thtLogo from "./pictures/tht logo.png";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
    const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

    return (
        <div className="navbar navbar-default fixed-top navbar-expand-sm navbar-light bg-light">
            <div className="container navbar-container">
                {isMobile ? (
                    <Link
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        className="navbar-brand"
                        to="/"
                    >
                        <img src={thtLogo} height="45" alt="tht-logo" />
                    </Link>
                ) : (
                    <Link className="navbar-brand" to="/">
                        <img src={thtLogo} height="45" alt="tht-logo" />
                    </Link>
                )}

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h3>
                                {isMobile ? (
                                    <Link
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse"
                                        className="nav-link"
                                        to="/rush"
                                    >
                                        Rush
                                    </Link>
                                ) : (
                                    <Link className="nav-link" to="/rush">
                                        Rush
                                    </Link>
                                )}
                            </h3>
                        </li>

                        <li className="nav-item">
                            <h3>
                                {isMobile ? (
                                    <Link
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse"
                                        className="nav-link"
                                        to="/members"
                                    >
                                        Members
                                    </Link>
                                ) : (
                                    <Link className="nav-link" to="/members">
                                        Members
                                    </Link>
                                )}
                            </h3>
                        </li>

                        <li className="nav-item">
                            <h3>
                                {isMobile ? (
                                    <Link
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse"
                                        className="nav-link"
                                        to="/faq"
                                    >
                                        FAQ
                                    </Link>
                                ) : (
                                    <Link className="nav-link" to="/faq">
                                        FAQ
                                    </Link>
                                )}
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
