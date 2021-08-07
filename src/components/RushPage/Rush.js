import React from "react";
import rushInformation from './rushInformation.json';
import '../../css/rush.scss';

export default function Rush() {
    let rushEvents = [];
    let eventNumber = 0;
    if(rushInformation['activeRush']) {
        rushInformation['rushEvents'].map((event) => {
            rushEvents.push(
                <div className="rush-event-card">
                    <div className={`event-${eventNumber}`}>
                        <div className="rush-title">
                            <h4>{event['name']}</h4>

                            <h4>{event['date']}</h4>
                        </div>

                        <div className="rush-description">
                            {event['description']}
                        </div>
                    </div>
                </div>
            );
            
            eventNumber = (eventNumber + 1) % 4;
        });
    }

    return(
        <React.Fragment>
            <div className="container">
                <div style={{width: "100vw", marginLeft: "-2.5vw"}}>
                    <div className="tht-purpose-container">
                        <div className="tht-purpose-text-border">
                            <hr />
                            <hr />
                        </div>

                        <h4 className="tht-purpose">
                            <b>
                                THE PURPOSE OF THETA TAU IS TO DEVELOP AND MAINTAIN A HIGH STANDARD
                                OF PROFESSIONAL INTEREST AMONG ITS MEMBERS AND TO UNITE THEM IN A
                                STRONG BOND OF FRATERNAL FELLOWSHIP.
                            </b>
                        </h4>

                        <div className="tht-purpose-text-border">
                            <hr />
                            <hr />
                        </div>
                    </div>
                </div>

                <br />
                
                <h1 className="brother-info-title"> What does it mean to be a Brother of Theta Tau? </h1>

                <p className="brother-info-text">
                    Theta Tau is first and foremost a <b>brotherhood</b> of engineers. Being
                    a brother of Theta Tau means that you have a community of brilliant men AND
                    women not only on campus, but across the country that will see you as family.
                    Being a brother means you hold a strong connection to a broad network of other
                    engineers - a network that permeates through your academic, professional,
                    and social life.
                </p>

                <p className="brother-info-text">
                    This network is a support structure that you can rely on in the face of struggles
                    that you will face in your college career. Being a brother means being part of
                    a community that you can depend on beyond the campus and throughout your life.
                    Being a brother means building deep relationships with a diverse group of people
                    who hold vast reservoir of insight and experience in many areas of life. The wealth
                    of these experiences enrich your life and teach you lessons that you can't learn
                    from the classroom or even a job. Being a brother means building a college
                    experience that is incredibly unique and valuable.
                </p>

                { rushInformation['activeRush'] ?
                    <div className="rush-container">
                        <b className="rush-welcome">
                            Come join us for our {rushInformation["rushSemester"]}&nbsp;
                            {rushInformation["rushYear"]} rush!
                        </b>

                        <div className="rush-events">
                            {rushEvents}
                        </div>
                    </div>
                :
                    <div className="norush-container">
                        <b>
                            Unfortunately, our rush season has ended for the current semester.
                            <br />
                            <br />
                            Feel free to check out our Instagram and Facebook page for any updates!
                            <br />
                            <br />
                            Typically, rush happens in the beginning of the semester so make sure to check
                            us out then~
                        </b>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}