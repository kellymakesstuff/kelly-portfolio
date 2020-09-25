import React from 'react'
import { withRouter } from 'react-router-dom'

function SingleProject({ project }) {


  return <>
    <img className="proj-img" src={project.img} alt={project.project} />
    <div className="live-buttons">
      <a target="_blank" rel="noopener noreferrer" href={project.deployed}>live</a>
      <br />
      <a target="_blank" rel="noopener noreferrer" href={project.github}>code</a>
    </div>
  </>
}



export default withRouter(SingleProject)

