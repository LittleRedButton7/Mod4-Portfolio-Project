import React from 'react'
// import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// import {SocialIcon} from 'react-social-media-icons';
// import LinkedInLogo from "../Components/Images/LinkedInLogo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
// import "../Components/FontawesomeIcons";

const Footer = () => {
    // const GitHubIcon = [{url:"", className: 'fa-github-square'}]

    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div className="column1">
                        <SocialIcon 
                            url="https://www.linkedin.com/in/marissanolan1/" 
                            className="mr-4" 
                            target="_blank" 
                            fgColor="#fff" 
                            style={{ height: 35, width:35 }} 
                        />
                    </div>
                    <div className="column2">
                        <h4>Denver, CO</h4>
                    </div>
                    <div className="column3">
                        <SocialIcon 
                            url="https://github.com/LittleRedButton7" 
                            className="mr-4" 
                            target="_blank" 
                            fgColor="#fff" 
                            style={{ height: 35, width:35 }} 
                        />
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
