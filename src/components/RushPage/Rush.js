import React from "react";
import rushInformation from "./rushInformation.json";
import rush_card from "./photos/rush_banner.jpg";
import { useSpring, animated } from "react-spring";
import moment from "moment";
import "../../css/rush.scss";

export default function Rush() {
    let rushEvents = [];
    let eventNumber = 0;
    const currentDate = moment().startOf("day");

    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: { duration: 750 },
    });

    if (rushInformation["activeRush"]) {
        rushInformation["rushEvents"].map((event) => {
            if (currentDate.diff(moment(event["date"], "MMM Do")) <= 0) {
                rushEvents.push(
                    <div className="rush-event-card">
                        <div className={`event-${eventNumber}`}>
                            <div className="rush-title">
                                <h4 className="rush-header">{event["name"]}</h4>

                                <div className="rush-event-info">
                                    <h4 className="rush-event-time">
                                        {event["date"]} @ {event["startTime"]}
                                        &nbsp;-&nbsp;{event["endTime"]}
                                    </h4>

                                    <h4 className="rush-event-location">
                                        <b>Location:</b>
                                        <br />
                                        {event["location"]}
                                    </h4>
                                </div>
                            </div>

                            <hr />

                            {event["dress_code"] ? (
                                <h4>
                                    <b>Dress Code:</b> {event["dress_code"]}
                                    <br />
                                    <br />
                                </h4>
                            ) : null}

                            <div className="rush-description">
                                {event["description"]}
                            </div>
                        </div>
                    </div>
                );
            }

            eventNumber = (eventNumber + 1) % 4;
        });
    }

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
                        {rushInformation["activeRush"] ? (
                            <div className="rush-container">
                                <b className="header join-rush-header">
                                    Come join us for our{" "}
                                    {rushInformation["rushSemester"]}
                                    &nbsp;
                                    {rushInformation["rushYear"]}&nbsp;rush!
                                </b>

                                <h3 className="responsive-header interest-form">
                                    <a href="https://docs.google.com/forms/d/1tu8VgUohbQV8i7VScbGJMavQfFBopxCaLbfLEDBu2Uk/edit">
                                        Click here to fill out our interest form
                                    </a>
                                </h3>

                                <img
                                    className="rush-card rush-poster"
                                    src={rush_card}
                                    alt="rush_card"
                                ></img>

                                <br className="rush-spacing" />
                                <br className="rush-spacing" />

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
