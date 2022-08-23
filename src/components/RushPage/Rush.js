import React from "react";
import rushInformation from "./rushInformation.json";
import rush_card from "./photos/rush_banner.jpg";
import { useSpring, animated } from "react-spring";
import moment from "moment";
import "../../css/rush.scss";

// www.thetatau-umich.org/#/rush
export default function Rush() {
    let rushEvents = [];
    let eventNumber = 0;
    const currentDate = moment().startOf("day");

    // Animation to fade in the page
    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: { duration: 750 },
    });

    // Adding in the rush events to appear on the page (if applicable)
    if (rushInformation["activeRush"]) {
        rushInformation["rushEvents"].map((event) => {
            // Displaying all events
            for (let i = 0, len = rushEvents.length, i < len; i++) {
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

            // Getting the color of the rush event card
            eventNumber = (eventNumber + 1) % 4;
        });
    }                  
    return (
        <React.Fragment>
            <div className="rush">
                <div className="container-fluid">
                    { /* Header */ }
                    <animated.h4 className="tht-purpose" style={fadeIn}>
                        THE PURPOSE OF THETA TAU IS TO DEVELOP AND MAINTAIN A
                        HIGH STANDARD OF PROFESSIONAL INTEREST AMONG ITS MEMBERS
                        AND TO UNITE THEM IN A STRONG BOND OF FRATERNAL
                        FELLOWSHIP.
                    </animated.h4>

                    { /* Active Rush Information */ }
                    <animated.div
                        className="container rush-info-container"
                        style={fadeIn}
                    >
                        {rushEvents.length ? (
                            <div className="rush-container">
                                <a
                                    className="interest-link"
                                    href={rushInformation["rushLink"]}
                                >
                                    <b className="header join-rush-header">
                                        Come join us for our{" "}
                                        {rushInformation["rushSemester"]}
                                        &nbsp;
                                        {rushInformation["rushYear"]}&nbsp;rush!
                                    </b>
                                </a>

                                <br className="rush-spacing" />

                                <div className="rush-events">{rushEvents}</div>
                            </div>
                        ) : (
                            <React.Fragment>
                                { /* No Rush Events Display */ }
                                <div className="alert alert-info no-rush-container">
                                    <b className="no-rush-alert">
                                        Unfortunately, our rush season has ended
                                        for the current semester.
                                        <br />
                                        <br />
                                        Feel free to check out our Instagram
                                        page for any updates!
                                        <br />
                                        <br />
                                        Typically, rush happens in the beginning
                                        of the semester
                                        so&nbsp;make&nbsp;sure&nbsp;to&nbsp;check&nbsp;us&nbsp;out&nbsp;then~
                                    </b>
                                </div>
                            </React.Fragment>
                        )}
                    </animated.div>
                </div>
            </div>
        </React.Fragment>
    );
}
