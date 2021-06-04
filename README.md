# Marissa Nolan Portfolio
This was my Mod4 project for Flatiron School. I made a personal portfolio website.


## Table of Contents
* [General Info](#General-Info)
* [Demo](#Demo)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Code Examples](#Code-Examples)
* [Features](#Features)
* [Status](#Status)
* [Contact](#Contact)

## General Info
I created a personal portfolio site to showcase some of the projects and technologies I have learned. I also included information to share a bit about my background as well as my resume.

## Demo
[Marissa Nolan Portfolio Site](https://www.loom.com/share/8dc078e6b6574111ba073bd4e9cc24f1)

## Technologies
* React
* HTML
* CSS


## Setup
* Fork and clone this repo into your local branch.
* Open it and run this frontend with npm start.
* Open in VS code or other text editor if you'd like to see the code.
* From there, explore the site and if you'd like to connect, please feel free to reach out or fill in the form on the contact page.

## Code Examples
React
```
import React, { useEffect, useState, useRef } from 'react'
import { SliderData } from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 4000)

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]
    );

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key=
                    {index}>
                        {index === current && (
                            <img src={slide.image} alt="cake picture" className="image"/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider

```

CSS
```
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');

:root {
  --primary-pink: #ff00bf;
  --primary-turquoise: #00fffd;
  --primary-dark: rgba(255, 255, 255, 0);
  --primary-yellow: #ffff00; 
}
/*************NAVBAR***************/


.navbar-brand{
  position: relative;
  left: -18rem;
}

.logo{
  width: 30rem;
}

@media(max-width: 768px){
  .navbar-brand{
    width: 5rem;
    left: 0;
  }
  .logo{
    width: 16rem;
    height: 7rem;
  }
}


```

## Features
* Explore the various portfolio pages.
* If you'd like to connect, please feel free to reach out on LinkedIn or fill in the contact form!

## Status
This is a functioning portfolio app. I'm sure as I continue to code and develop new projects, I will be updating the content. Also, at the moment, it is only a repository. Once I get it to a good place, I'd like to deploy it live for easier access.

## Contact
Feel free to reach out and connect with me!
[Marissa Nolan](https://www.linkedin.com/in/marissanolan1/) 

### Thanks for visiting!
