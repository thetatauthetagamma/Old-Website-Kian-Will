import React from "react";
import { useSpring, animated } from 'react-spring';
import '../../css/home.scss';

export default function BLM(props) {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
            "margin-top": 50
        },
        to: {
            opacity: 1,
            "margin-top": 0
        },
        config: {duration: 1000}
    });

    return(
        <React.Fragment>
            <div className="blm" style={{backgroundColor: "black"}}>
                <div className="container">
                    <animated.div style={fadeIn}>
                        <h1 className="header" style={{textAlign: "center"}}>Black Lives Matter.</h1>

                        <p className="content-text">
                            The Theta Tau Theta Gamma chapter at the University of Michigan is outraged
                            by the deaths of George Floyd, Breonna Taylor, and countless other Black Americans
                            who have lost their lives to police brutality. These are just the newest examples
                            of how racism and bigotry are deeply embedded in many aspects of our society.
                        </p>

                        <p className="content-text">
                            As a brotherhood of many races, religions, sexualities, and other diverse identities,
                            we have always felt that promoting inclusion in the field of engineering is essential
                            to our mission. However, as we listen to the outrage and pain that the Black community
                            is expressing, we realize that we must do more to help fight systemic racism in our
                            country and our communities.
                        </p>

                        <hr style={{width: "90%", margin: "3vh auto", height: "2px", background: "#FFFFFF"}}/>

                        <div className="blm-info">
                            <b className="blm-info-title">We do not want these words to be an empty gesture. As a fraternity, we are committed to changes in: </b>
                            <br />
                            <div>
                                <b>Education for our brothers.</b>
                                <br />
                                <ul>
                                    <li>Providing our brothers with a list of books, films, articles, and other resources this week to engage in conversations throughout the summer.</li>
                                    <li>Develop antiracism and allyship curriculum for potential new member classes.</li>
                                    <li>Educate our brothers on black history and white supremacy, both broadly and particularly in the field of engineering.</li>
                                    <li>Develop workshop for leadership members in particular.</li>
                                </ul>
                            </div>

                            <div>
                                <b>Action supporting equity in our community.</b>
                                
                                <ul>
                                    <li>Ensure that recruitment outreach includes campus affinity groups to diversify rush classes.</li>
                                    <li>Support black and POC owned businesses for events and catering.</li>
                                    <li>Fundraise for causes with local equity and justice as priorities.</li>
                                    <li>Continue to share local and national news so brothers stay involved.</li>
                                </ul>
                            </div>

                            <div>
                                <b>Culture shift to enforce accountability.</b>
                                
                                <ul>
                                    <li>Commitment to Allyship: outline what it means to be an ally (enforcing constant learning/unlearning, open conversations, self reflection, and more).</li>
                                    <li>Call out racism, whether overt, microaggression, or otherwise.</li>
                                    <li>Establish a safe environment where brothers can have open conversations and educate one another in the moment.</li>
                                    <li>Continuous evaluation of the results of these measures to enforce accountability for progress.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="blm-signature">
                                    As committed allies of the Black Lives Matter movement, we must strive to be
                                    actively anti-racist to dismantle white supremacy and protect Black lives by
                                    educating ourselves and using our 	privilege in support. We commit to holding
                                    ourselves accountable for progress and continuously evaluating how we can improve.

                                    <br />
                                    <br />
                                    
                                    In H&amp;T,
                                    <br />
                                    The Brotherhood of Theta Tau Theta Gamma
                                </p>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </React.Fragment>
    )
}