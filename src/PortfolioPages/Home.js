import React from "react";
import Typed from 'react-typed';
import { Link } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderData";
import TechCards from "../Components/TechCardTemplate";

const Header = () => {
    return (
        <div className="home-page">
            <div className="main-info">
                {/* <h1>Web Development Projects</h1> */}
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Engineer", "Relationship Builder", "Creator", "Problem Solver"]}
                    typeSpeed={50}
                    backspeed={70}
                    loop
                />
                
            </div>
            {/* <div className="portfolio-highlights">
                <h1>Portfolio Highlights</h1>
                <p>Highlight tech skills here.</p>
            </div> */}
            <div className="about">
                <h1>About</h1>
                <p>Full stack web developer with a passion for both front and backend. 
                    My technical experience includes Ruby on Rails, JavaScript, HTML, CSS and React. 
                    When I’m not coding, I enjoy dancing, cooking, cake decorating, playing piano and 
                    spending time with friends and family.</p>
                <TechCards />
            </div>
            <div className="image-slider">
                <h1>Art Through Cakes</h1>
                <ImageSlider slides={SliderData}/>
            </div>
            <div className="contact-button-div"><Link to="/contact" className="button-main-offering">Contact</Link></div>
        </div>
    )
}

export default Header