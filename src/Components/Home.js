import React from "react";
import Typed from 'react-typed';
import { Route, Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                {/* <h1>Web Development Projects</h1> */}
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Engineer", "Relationship Builder", "Creator", "Problem Solver"]}
                    typeSpeed={70}
                    backspeed={70}
                    loop
                />
                <Link to="/contact" className="button-main-offering">Contact</Link>
            </div>
        </div>
    )
}

export default Header