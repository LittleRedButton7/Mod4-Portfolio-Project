import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { falinkedin } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div className="column">
                        <h4>LinkedIn</h4>
                    </div>
                    <div className="column">
                        <h4>Denver, CO</h4>
                    </div>
                    <div className="column">
                        <h4>GitHub Link Here</h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="column-small">
                        &copy;{new Date().getFullYear()} MARISSA NOLAN | All Rights Reserved 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
