import React from "react";
import BLM from './BLM'
import '../../css/home.css';

export default function Home(props) {
    return(
        <React.Fragment>
            <BLM />

            <br />
            <br />
            <hr />

            <div className="home-info">
                <div>
                    <h3 className="home-about">About</h3>

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
                </div>
            </div>
        </React.Fragment>
    )
}