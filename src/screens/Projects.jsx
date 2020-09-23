import React, { useState } from 'react'
import projectData from './projectData'
import SingleProject from '../shared/SingleProject'
import { withRouter } from 'react-router-dom'

function Projects() {
  let [projects, setProjects] = useState(projectData)

  console.log(projectData)
  console.log(projects)
  return <>
    <h1>Projects</h1>

    <div className="black-box">

      {projects.map(project => <SingleProject project={project} />)}
    </div>

    <h3></h3>
  </>

}

export default withRouter(Projects)