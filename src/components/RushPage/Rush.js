import React from "react";
import rushInformation from "./rushInformation.json";
import rush_card from "./photos/rush_banner.jpg";
import { useSpring, animated } from "react-spring";
import "../../css/rush.scss";

export default function Rush() {
    let rushEvents = [];
    let eventNumber = 0;
    if (rushInformation["activeRush"]) {
        rushInformation["rushEvents"].map((event) => {
            rushEvents.push(
                <div className="rush-event-card">
                    <div className={`event-${eventNumber}`}>
                        <div className="rush-title">
                            <h4>{event["name"]}</h4>

                            <h4>{event["date"]}</h4>

                            <h4>Location: {event["location"]}</h4>

                            {event["dress_code"] ? (
                                <h4>Dress Code: {event["dress_code"]}</h4>
                            ) : null}
                        </div>

                        <div className="rush-description">
                            {event["description"]}
                        </div>
                    </div>
                </div>
            );

            eventNumber = (eventNumber + 1) % 4;
        });
    }

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
            <div className="rush">
                <div className="container-fluid">
                    <animated.h4 className="tht-purpose" style={fadeIn}>
                        THE PURPOSE OF THETA TAU IS TO DEVELOP AND MAINTAIN A
                        HIGH STANDARD OF PROFESSIONAL INTEREST AMONG ITS MEMBERS
                        AND TO UNITE THEM IN A STRONG BOND OF FRATERNAL
                        FELLOWSHIP.
                    </animated.h4>

                    <animated.div className="container" style={fadeIn}>
                        <h1 className="header">
                            What does it mean to be a Brother of Theta&nbsp;Tau?
                        </h1>

                        <p className="content-text">
                            Theta Tau is first and foremost a <b>brotherhood</b>{" "}
                            of engineers. Being a brother of Theta Tau means
                            that you have a community of brilliant men AND women
                            not only on campus, but across the country that will
                            see you as family. Being a brother means you hold a
                            strong connection to a broad network of other
                            engineers - a network that permeates through your
                            academic, professional, and social life.
                        </p>

                        <p className="content-text">
                            This network is a support structure that you can
                            rely on in the face of struggles that you will face
                            in your college career. Being a brother means being
                            part of a community that you can depend on beyond
                            the campus and throughout your life. Being a brother
                            means building deep relationships with a diverse
                            group of people who hold vast reservoir of insight
                            and experience in many areas of life. The wealth of
                            these experiences enrich your life and teach you
                            lessons that you can't learn from the classroom or
                            even a job. Being a brother means building a college
                            experience that is incredibly unique and valuable.
                        </p>

                        {rushInformation["activeRush"] ? (
                            <div className="rush-container">
                                <b className="header">
                                    Come join us for our{" "}
                                    {rushInformation["rushSemester"]}
                                    &nbsp;
                                    {rushInformation["rushYear"]} rush!
                                </b>

                                <h3 className="responsive-header"><a href="https://docs.google.com/forms/d/1tu8VgUohbQV8i7VScbGJMavQfFBopxCaLbfLEDBu2Uk/edit">
                                    Click here to fill out our interest form
                                </a></h3>

                                <img className="rush-card" src={rush_card} alt="rush_card"></img>
                                
                                <h1 className="responsive-header">Rush Chairs</h1>
                                <h4 className="rush-chairs">Madi Rose, Alyssa Shapiro, Joe Singh, Dana Suchara, Jake Yeaman</h4>

                                <div className="rush-events">{rushEvents}</div>
                            </div>
                        ) : (
                            <div className="alert alert-info">
                                <b className="no-rush-alert">
                                    Unfortunately, our rush season has ended for
                                    the current semester.
                                    <br />
                                    <br />
                                    Feel free to check out our Instagram and
                                    Facebook page for any updates!
                                    <br />
                                    <br />
                                    Typically, rush happens in the beginning of
                                    the semester so make sure to check us out
                                    then~
                                </b>
                            </div>
                        )}
                    </animated.div>
                </div>
            </div>
        </React.Fragment>
    );
}
