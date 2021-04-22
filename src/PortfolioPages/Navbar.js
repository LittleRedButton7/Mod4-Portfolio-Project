import React from "react"
import myLogo from "../MyLogo.png"
import { Route, Link } from "react-router-dom"
// REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
    <div className="logo-container">
        <a className="navbar-brand" href="#"><img src={myLogo} className="logo" alt="Marissa Nolan" /></a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#00fffd"}}/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/artwork">Artwork</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
        
        </ul>
    </div>
    </div>
    </nav>
    )
}

export default Navbar

/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li> */