import React from "react";
import Typed from 'react-typed';
import { Route, Link } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderData";

const Header = () => {
    return (
        <div className="home-page">
            <div className="main-info">
                {/* <h1>Web Development Projects</h1> */}
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Engineer", "Relationship Builder", "Creator", "Problem Solver"]}
                    typeSpeed={70}
                    backspeed={70}
                    loop
                />
                
            </div>
            <div className="portfolio-highlights">
                <h1>Portfolio Highlights</h1>
                <p>Highlight tech skills here.</p>
            </div>
            <div className="image-slider">
                <h1>Art Through Cakes</h1>
                <ImageSlider slides={SliderData}/>
            </div>
            <div><Link to="/contact" className="button-main-offering">Contact</Link></div>
        </div>
    )
}

export default Header