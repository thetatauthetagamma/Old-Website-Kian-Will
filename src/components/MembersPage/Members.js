import React from "react";
import { useSpring, animated } from "react-spring";
import membersPhoto from "../../pictures/members.jpg";
import "../../css/members.scss";

export default function Members() {
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
            <animated.div
                className="container-fluid members-container"
                style={fadeIn}
            >
                <div className="members-picture-container">
                    <img
                        className="picture"
                        src={membersPhoto}
                        alt="theta tau members"
                    />
                    <h1 className="picture-text">Members</h1>
                </div>

                <div className="container">
                    <h1 className="rush-header">
                        What does it mean to be a Brother of Theta&nbsp;Tau?
                    </h1>

                    <p className="content-text">
                        Theta Tau is first and foremost a <b>brotherhood</b> of
                        engineers. Being a brother of Theta Tau means that you
                        have a community of brilliant men AND women not only on
                        campus, but across the country that will see you as
                        family. Being a brother means you hold a strong
                        connection to a broad network of other engineers - a
                        network that permeates through your academic,
                        professional, and social life.
                    </p>

                    <p className="content-text rush-text">
                        This network is a support structure that you can rely on
                        in the face of struggles that you will face in your
                        college career. Being a brother means being part of a
                        community that you can depend on beyond the campus and
                        throughout your life. Being a brother means building
                        deep relationships with a diverse group of people who
                        hold vast reservoir of insight and experience in many
                        areas of life. The wealth of these experiences enrich
                        your life and teach you lessons that you can't learn
                        from the classroom or even a job. Being a brother means
                        building a college experience that is incredibly unique
                        and valuable.
                    </p>

                    <hr />

                    <div>
                        <p className="content-text">
                            When you ask someone why they joined Theta Tau,
                            you'll probably get a diverse set of answers. Some
                            join because they seek professional growth. Others
                            join to meet more engineers in their major and
                            across disciplines. Some are attracted to networking
                            opportunities, or have heard that Theta Tau is the
                            oldest and largest Professional Engineering
                            Fraternity in the country.
                        </p>

                        <p className="content-text">
                            However, when you ask someone why they stayed, and
                            continue to participate in the Fraternity, you'll
                            likely ever hear one answer. <b>It's the people</b>.
                            Among all other things, it's the people, their
                            values and their culture that make your college
                            experience, and what you will remember years after
                            you graduate. And this is especially true with Theta
                            Gamma Chapter, which is made of some of the most
                            diverse and extraordinary engineers you will ever
                            meet. These people are going places.
                        </p>
                    </div>
                </div>
            </animated.div>
        </React.Fragment>
    );
}
