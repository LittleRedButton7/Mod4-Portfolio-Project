import React from "react";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                {/* <h1>Web Development Projects</h1> */}
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Engineer", "Relationship Builder", "Creator", "Problem Solver"]}
                    typeSpeed={60}
                    backspeed={70}
                    loop
                />
                <a href="#" className="button-main-offering">Contact</a>
            </div>
        </div>
    )
}

export default Header