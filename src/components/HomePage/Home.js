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
        config: {duration: 1250}
    });

    return(
        <React.Fragment>
            <div style={{backgroundColor: "white"}}>
                <animated.div className="about-container" style={fadeIn}>
                    <h3 className="about-header">About Us</h3>

                    <p>
                        Theta Tau is a Professional Engineering Fraternity. As a group, we
                        are dedicated to the professional and social development of our members
                        into professionals that will enter the industry as strong, contributing
                        members. Our chapter is known as Theta Gamma Chapter and is one of the
                        largest chapters in the Country.
                    </p>

                    <br />

                    <p>
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