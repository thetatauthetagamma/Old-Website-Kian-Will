import React from "react";
import "../css/footer.scss";
import { FacebookLogo, InstagramLogo } from "../icons";

export default function Footer() {
    return (
        <React.Fragment>
            <div className="container-fluid footer-container">
                <div className="container footer-info">
                    <div className="footer-contact-us">
                        <h4>Contact Us</h4>
                        <div className="contact-links">
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-regents@umich.edu"
                                >
                                    Regent&nbsp;/&nbsp;Vice Regent
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-eboard@umich.edu"
                                >
                                    Executive Board
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-corsec@umich.edu"
                                >
                                    Alumni&nbsp;/&nbsp;Interchapter Relations
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-corporate@umich.edu"
                                >
                                    Corporate Sponsorship Events
                                </a>
                            </div>
                        </div>

                        <div className="footer-socials">
                            <a href="https://www.instagram.com/thetatau_umich">
                                {InstagramLogo}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
