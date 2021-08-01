import React, { useState } from "react";
import Modal from 'react-modal';
import '../css/footer.scss'

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    return(
        <React.Fragment>
            <Modal
                onRequestClose={() => setShowModal(false)}
                isOpen={showModal}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <div className="contact-container">
                    <div>
                        <h1>Contact Us</h1>
                        <p>If you wish to send us a message, feel free to contact us through one of our emails: </p>
                        <ul>
                            <li>
                                For matters that directly concern the regent or vice regent of our chapter,&nbsp;
                                <a href="mailto:tht-regents@umich.edu">tht-regents@umich.edu</a>
                            </li>
                            <li>
                                For matters that should reach the whole chapter executive board,&nbsp;
                                <a href="mailto:tht-eboard@umich.edu">tht-eboard@umich.edu</a>
                            </li>
                            <li>
                                For matters relating to alumni relations or business between other chapters,&nbsp;
                                <a href="mailto:tht-corsec@umich.edu">tht-corsec@umich.edu</a>
                            </li>
                            <li>
                                For matters concerning corporate sponsorship events like tech talks or recruitment events,&nbsp;
                                <a href="mailto:tht-corporate@umich.edu">tht-corporate@umich.edu</a>
                            </li>
                        </ul>
                        <br />
                        <p></p>
                    </div>
                </div>
            </Modal>
            <div className="footer-container">
                <a className="footer-text" onClick={() => {
                    setShowModal(true);
                }}>Contact Us</a>
            </div>
        </React.Fragment>
    )
}