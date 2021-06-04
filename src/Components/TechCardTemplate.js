import React from 'react'
import { allTechCardInfo } from "./AllTechCardInfo"
import { Link } from "react-router-dom"

export default function TechCards() {

    const mapSkills = (techCard) => {
        return techCard.techSkills.map(skill => {
            return <li>{skill}</li>
        })
    }


    return (
        <div className="tech-info-wrapper">
            {
                allTechCardInfo.map((techCard) => {
                    return <Link to="/portfolio"><div className="tech-card" key={techCard.id} >
                        <img src={techCard.techImage} alt="tech-clipart" />
                        <h1>{techCard.techName}</h1>
                        <ul>
                            {mapSkills(techCard)}
                        </ul>
                    </div>
                    </Link>
                })
            }
        </div>
    )
}