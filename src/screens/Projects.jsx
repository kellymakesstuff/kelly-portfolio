import React, { useState } from 'react'
import projectData from './projectData'
import SingleProject from '../shared/SingleProject'
import { withRouter } from 'react-router-dom'

function Projects() {
  let [projects, setProjects] = useState(projectData)

  console.log(projectData)
  console.log(projects)
  return <>

    <div className="black-box col-10">

      {projects.map(project => <SingleProject project={project} />)}
    </div>

  </>

}

export default withRouter(Projects)