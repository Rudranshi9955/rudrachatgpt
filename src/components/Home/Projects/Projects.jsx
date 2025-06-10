import React from 'react'
import Card from "../Card/Card"
import va from "../../../assets/va.png"
import "./Projects.css"

function Projects() {
  return (
    <div id="projects">
      <h1 id ="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT " image={va}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Projects
