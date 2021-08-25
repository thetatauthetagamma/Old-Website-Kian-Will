import React from "react";
import BLM from "./BLM";
import { useSpring, animated } from "react-spring";
import slide1 from "../../pictures/home/Slide1.jpg";
import slide2 from "../../pictures/home/Slide2.JPG";
import slide3 from "../../pictures/home/Slide3.png";
import slide4 from "../../pictures/home/Slide4.png";
import slide5 from "../../pictures/home/Slide5.jpg";
import slide6 from "../../pictures/home/Slide6.JPG";
import "../../css/home.scss";

export default function Home(props) {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: { duration: 750 },
    });

    return (
        <React.Fragment>
            <div className="home-carousel-container">
                <div
                    id="home-carousel"
                    className="carousel slide carousel-fade"
                    data-interval="6000"
                    data-ride="carousel"
                    data-pause={false}
                    data-keyboard={false}
                >
                    <div class="carousel-inner">
                        <div class="carousel-item home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />
                        </div>
                        <div class="carousel-item home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />
                        </div>
                        <div class="carousel-item home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide3}
                                alt="Second slide"
                            />
                        </div>
                        <div class="carousel-item active home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide4}
                                alt="Second slide"
                            />
                        </div>
                        <div class="carousel-item home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide5}
                                alt="Second slide"
                            />
                        </div>
                        <div class="carousel-item home-pictures">
                            <img
                                class="d-block w-100"
                                src={slide6}
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </div>
                <h1 className="carousel-text">
                    Theta&nbsp;Tau at the University&nbsp;of&nbsp;Michigan
                </h1>
            </div>
            <div
                className="about-container"
                style={{ backgroundColor: "white" }}
            >
                <animated.div className="container" style={fadeIn}>
                    <h1 className="header">About Us</h1>

                    <p className="content-text">
                        Theta Tau is a Professional Engineering Fraternity. As a
                        group, we are dedicated to the professional and social
                        development of our members into professionals that will
                        enter the industry as strong, contributing members. Our
                        chapter is known as Theta Gamma Chapter and is one of
                        the largest chapters in the Country.
                    </p>

                    <br />

                    <p className="content-text">
                        Theta Tau is made up of smart, driven engineers who come
                        from a diverse range of backgrounds and majors. Our
                        chapter holds events weekly designed to instill a
                        brotherhood among our members and develop ourselves as
                        well as our college and University.
                    </p>
                </animated.div>
            </div>

            <div className="home-gradient" />

            <div style={{ backgroundColor: "black" }}>
                <BLM />
            </div>
        </React.Fragment>
    );
}
