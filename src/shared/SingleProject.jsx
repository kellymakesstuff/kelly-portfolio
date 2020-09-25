import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function SingleProject({ project }) {


  return <>
    <img className="proj-img" src={project.img} alt={project.project} />
  </>
}



export default withRouter(SingleProject)

