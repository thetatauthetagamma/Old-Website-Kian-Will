import React from "react";
import { useSpring, animated } from 'react-spring';
import '../css/test.scss';

export default function Test() {
    const fallIn = useSpring({
        from: {
            opacity: 0,
            marginTop: -100
        },
        to: {
            opacity: 1,
            marginTop: 0
        },
        config: {duration: 1000}
    });

    const fadeIn = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {duration: 1000}
    });

    return(
        <React.Fragment>
            <div className="container">

                <animated.div style={fallIn}>
                    <h1>Hello World!</h1>

                    <br />

                    <h3>This is some sample text.</h3>
                </animated.div>


            </div>
        </React.Fragment>
    )
}