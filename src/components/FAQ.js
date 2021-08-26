import React from "react";
import { useSpring, animated } from "react-spring";
import "../css/faq.scss";

export default function FAQ() {
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
                className="container-fluid faq-container"
                style={fadeIn}
            >
                <div className="vertical-column" />
                <div className="faq-info-container">
                    <h1 className="header" style={{ textAlign: "center" }}>
                        {" "}
                        FAQ{" "}
                    </h1>

                    <div className="accordion faq">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5>
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What are fraternities and sororities?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseOne"
                                class="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Fraternities and Sororities are what many
                                    people refer to "Greek Life"— societies that
                                    induct members for lifetime membership.
                                    Sororities are all-female Greek
                                    Organizations, while Fraternities can be
                                    both all-male and co-ed Organizations. Each
                                    organization has certain rules and values
                                    that make each one unique; however, they are
                                    often considered either "Social" or
                                    "Professional" groups. Professional Greek
                                    Organizations have strong focus on
                                    developing their members professionally as
                                    well as creating a strong Brotherhood or
                                    Sisterhood.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="collapseTwo"
                                    >
                                        What kind of Greek organization is Theta
                                        Tau?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseTwo"
                                class="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Theta Tau is a Co-ed Professional
                                    Engineering Fraternity. This makes us a{" "}
                                    <i>professional</i> fraternity, which means
                                    we value the professional development and
                                    conduct of our members more than a social
                                    fraternity might. We are also composed of
                                    members that have an interest in
                                    Engineering, which unites us as another
                                    common focus. Finally, we are co-ed, and
                                    accept members of all genders.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseThree"
                                        aria-expanded="true"
                                        aria-controls="collapseThree"
                                    >
                                        What is Rushing?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseThree"
                                class="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Rushing is an interesting term to describe
                                    the first interactions you have with Greek
                                    organization. Theta Tau's Rush week is
                                    designed to introduce you to the Fraternity
                                    and it's members. You don't have to be an
                                    Engineer to attend Theta Tau rush events,
                                    and you are allowed to Rush other Greek
                                    fraternities and sororities while rushing
                                    Theta Tau.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseFour"
                                        aria-expanded="true"
                                        aria-controls="collapseFour"
                                    >
                                        I've heard that Fraternities haze their
                                        members. Does Theta Tau do this as well?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseFour"
                                class="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Theta Tau is Professional fraternity, and we{" "}
                                    <strong>
                                        absolutely do not tolerate hazing
                                    </strong>
                                    . For that matter, we are also a <i>dry</i>{" "}
                                    fraternity, and do not spend money on
                                    alcohol nor do we permit alcohol at our
                                    events, including Rush Events. We uphold a
                                    strict Risk Management policy to protect the
                                    reputation of the Fraternity and protect our
                                    interest in maintaining professionalism.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseFive"
                                        aria-expanded="true"
                                        aria-controls="collapseFive"
                                    >
                                        Do I need to be an Engineer to join?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseFive"
                                class="collapse"
                                aria-labelledby="headingFive"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    We do not require you to be an Engineer to
                                    rush with us. And once you are brother, you
                                    won't lose your membership if you decide to
                                    leave the College of Engineering or pursue
                                    another major. The only condition we do
                                    require is that you are in the College of
                                    Engineering at the time of your initiation.
                                    This means if you are in the process of
                                    applying to the College, you shouldn't count
                                    yourself out!
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingSix">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseSix"
                                        aria-expanded="true"
                                        aria-controls="collapseSix"
                                    >
                                        How is Theta Tau different from an Honor
                                        Society?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseSix"
                                class="collapse"
                                aria-labelledby="headingSix"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Honor societies are great for being around
                                    people that share an academic interest with
                                    you. These are excellent groups for
                                    furthering your interests in a topic, but
                                    the benefits often stop there. Because Theta
                                    Tau is a brotherhood, you will a join a
                                    group of people that take friendships beyond
                                    the classroom and even the campus, and treat
                                    you like part of a family. You will connect
                                    with a group of people that have a diverse
                                    range of interests, which helps you
                                    diversify the kinds of contacts you make,
                                    and opens up opportunities beyond your
                                    major. And yet, Theta Tau will provide you
                                    will some of the greatest memories in
                                    college, 4 years that you don't want to just
                                    spend stuck in a textbook.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingSeven">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseSeven"
                                        aria-expanded="true"
                                        aria-controls="collapseSeven"
                                    >
                                        How do I join Theta Tau?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseSeven"
                                class="collapse"
                                aria-labelledby="headingSeven"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Joining Theta Tau itself is a great
                                    experience. First, attend our Rush events.
                                    There, you'll get to introduce yourself to
                                    our Brothers and get a feel for what the
                                    fraternity is like. Our rush events are
                                    typically low-stress, and simple activities
                                    that provide ample opportunity to hang out
                                    with Brothers. Then, you will be given a
                                    bid, which is an invitation to become a
                                    pledge with the Fraternity. After accepting
                                    your bid, you will become a pledge and start
                                    the process to becoming a brother!
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingEight">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseEight"
                                        aria-expanded="true"
                                        aria-controls="collapseEight"
                                    >
                                        What can I expect at Rush Events?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseEight"
                                class="collapse"
                                aria-labelledby="headingEight"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Rush is typically at the beginning of the
                                    academic semester. Rush events are
                                    low-stress, simple activities that are
                                    designed to help get exposure to the
                                    fraternity, and for Brothers to meet you.
                                    Our first rush events are typically
                                    Information Sessions where our Rush chairs
                                    will give you a in-depth explanation of the
                                    process to becoming a Brother of Theta Tau.
                                    Other Rush events will be a mix of fun and
                                    professional events that vary from Semester
                                    to Semester. You definitely want to
                                    introduce yourself to as many brothers and
                                    other Rushees as you can at every Rush
                                    event. This is the best way to show your
                                    interest in the fraternity. Relax and have
                                    fun! Many rushees walk away from Rush with
                                    some unexpected but important friendships.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingNine">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseNine"
                                        aria-expanded="true"
                                        aria-controls="collapseNine"
                                    >
                                        What kind of time commitment is Theta
                                        Tau?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseNine"
                                class="collapse"
                                aria-labelledby="headingNine"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    Rush is intended to be low time commitment
                                    activity, and usually only about 4-6 hours
                                    per week (this is about the same as 1 credit
                                    class). Once you move further in the process
                                    and become a pledge, more commitment will be
                                    expected of you. Your time commitment may
                                    average closer to 8-10 hours, however your
                                    time will be well spent developing
                                    meaningful relationships with brothers and
                                    fellow pledges. Note that Rushing and
                                    Pledging are more rewarding the more time
                                    you invest in them. It is ultimately up to
                                    you to manage your time in a way to make the
                                    proper time commitment to the fraternity.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTen">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseTen"
                                        aria-expanded="true"
                                        aria-controls="collapseTen"
                                    >
                                        Am I eligible to join?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseTen"
                                class="collapse"
                                aria-labelledby="headingTen"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    <p>
                                        As a quick checklist, you are eligible
                                        to join Theta Tau as long as long you
                                        can meet the following criteria at the
                                        time of your initiation:
                                    </p>

                                    <ul>
                                        <li>
                                            Enrolled at the College of
                                            Engineering
                                        </li>
                                        <li>
                                            Have at least 6 months before
                                            graduation
                                        </li>
                                        <li>
                                            Have a minimum (passing GPA) of 2.0
                                        </li>
                                        <li>
                                            Not be a member of a competing
                                            Fraternity or Sorority
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingEleven">
                                <h5 class="mb-0">
                                    <button
                                        class="btn btn-link faq-btn"
                                        data-toggle="collapse"
                                        data-target="#collapseEleven"
                                        aria-expanded="true"
                                        aria-controls="collapseEleven"
                                    >
                                        How do I pronounce "Theta Tau"?
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseEleven"
                                class="collapse"
                                aria-labelledby="headingEleven"
                                data-parent="#accordion"
                            >
                                <div class="card-body">
                                    THAY-Ta TAH. Notice the pronunciation of
                                    "Tau" differs from the typical pronunciation
                                    you might hear in a Math class. This is not
                                    by mistake, but rather a Greek Grammatical
                                    rule.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-column" />
            </animated.div>
        </React.Fragment>
    );
}
