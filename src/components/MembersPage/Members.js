import React from "react";
import { useSpring, animated } from 'react-spring';
import '../../css/members.scss';

export default function Members() {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {duration: 750}
    });
    
    return(
        <React.Fragment>
            <animated.div className="container" style={fadeIn}>
                <div>
                    <h1 className="header" style={{textAlign: "center"}}>Members</h1>

                    <p className="content-text">
                        When you ask someone why they joined Theta Tau, you'll probably get a diverse
                        set of answers. Some join because they seek professional growth. Others join
                        to meet more engineers in their major and across disciplines. Some are attracted
                        to networking opportunities, or have heard that Theta Tau is the oldest and
                        largest Professional Engineering Fraternity in the country.
                    </p>

                    <p className="content-text">
                        However, when you ask someone why they stayed, and continue to participate in
                        the Fraternity, you'll likely ever hear one answer. <b>It's the people</b>.
                        Among all other things, it's the people, their values and their culture that
                        make your college experience, and what you will remember years after you graduate.
                        And this is especially true with Theta Gamma Chapter, which is made of some of
                        the most diverse and extraordinary engineers you will ever meet. These people
                        are going places.
                    </p>
                </div>

            </animated.div>
        </React.Fragment>
    )
}