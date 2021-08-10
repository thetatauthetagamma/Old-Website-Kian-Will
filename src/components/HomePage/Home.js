import React from "react";
import BLM from './BLM';
import { useSpring, animated } from 'react-spring';
import '../../css/home.scss';

export default function Home(props) {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {duration: 1000}
    });

    return(
        <React.Fragment>
            <div className="about-container" style={{backgroundColor: "white"}}>
                <animated.div className="container" style={fadeIn}>
                    <h1 className="header">About Us</h1>

                    <p className="content-text">
                        Theta Tau is a Professional Engineering Fraternity. As a group, we
                        are dedicated to the professional and social development of our members
                        into professionals that will enter the industry as strong, contributing
                        members. Our chapter is known as Theta Gamma Chapter and is one of the
                        largest chapters in the Country.
                    </p>

                    <br />

                    <p className="content-text">
                        Theta Tau is made up of smart, driven engineers who come from a diverse
                        range of backgrounds and majors. Our chapter holds events weekly designed
                        to instill a brotherhood among our members and develop ourselves as
                        well as our college and University.
                    </p>
                </animated.div>
            </div>

            <div className="home-gradient" />

            <div style={{backgroundColor: "black"}}>
                <BLM  />
            </div>
        </React.Fragment>
    )
}