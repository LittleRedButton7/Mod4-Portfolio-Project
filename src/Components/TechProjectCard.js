import React from 'react'
// import "./PageStyle.css";
import { allTechProjectCardInfo } from "./AllTechProjectInfo";

export default function ProjectCards() {

    return (
        <div className="project-info-wrapper">
            {
                allTechProjectCardInfo.map((projectCard) => {
                    return <div className="project-card" key={projectCard.id}>
                        <img src={projectCard.projectImage} alt="project-image" />
                        <h1>{projectCard.projectName}</h1>
                        <h3><a href={projectCard.gitHubURL}>{projectCard.gitHub}</a></h3>
                    </div>
                })
            }
        </div>
    )
}