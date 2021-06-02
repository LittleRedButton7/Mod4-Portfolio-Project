import React from 'react'
import "./PageStyle.css"
// import { allArt } from "../Components/OtherArtwork";
import { cakeTimelineElements } from "../Components/CakeTimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

export default function Artwork() {
    // let cakeIconStyles = { background: "#06D6A0"};
    // let showButton = 
    //     element.buttonText !== undefined && 
    //     element.buttonText !== nulll && 
    //     element.buttonText !== ""
    let cakeIcon = <FontAwesomeIcon icon={faBirthdayCake} style={{color: "black"}} className="icon"/>

    return (
        <div className="cake-timeline-div">
            <h2>Cake Making</h2>
            <p>I have been designing and decorating cakes for a number of years. 
                It takes miticulous designing, planning and execution to make the final product come together. 
                Here is just one progression of a cake project from start to finish.</p>
            <VerticalTimeline>
                {
                    cakeTimelineElements.map((element) => {
                        return (
                            <VerticalTimelineElement
                                className="timeline-card"
                                key={element.id}
                                icon={cakeIcon}
                                iconClassName="cake-icon"
                                // icon={faBirthdayCake}
                                // iconStyle={{color: "#00fffd"}}
                                >
                                
                                <img src={element.image} className="timeline-pic" alt="cakepic"/>
                                <h3 titleClassName="cake-title">{element.title} </h3>
                                <p id="cake-description">{element.description}</p>
                
                            </VerticalTimelineElement>
                        )
                    
                })}
            </VerticalTimeline>
            {/* <h2>Other Artwork</h2>
            <div className="other-art-div">
            {
                allArt.map((artwork) => {
                    return <div className="artpiece" key={artwork.id}>
                        <img src={artwork.image} className="artpiece-image" />
                    </div>
                })
            }
        </div> */}
        </div>
    )
}