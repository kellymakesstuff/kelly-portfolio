import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function SingleProject({ project }) {


  return <>
    <img className="proj-img" src={project.img} alt={project.project} />
    <div className="live-buttons">
      <a target="_blank" href={project.deployed}>live</a>
      <br />
      <a target="_blank" href={project.github}>code</a>
    </div>
  </>
}



export default withRouter(SingleProject)

