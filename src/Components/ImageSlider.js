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
