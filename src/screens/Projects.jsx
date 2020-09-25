import React, { useState } from 'react'
import SingleProject from '../shared/SingleProject'
import { withRouter } from 'react-router-dom'

function Projects({ projects }, { projDetail }) {

  console.log(projects)
  console.log(projDetail)
  return <>

    <div className="black-box col-10">

      {projects.map(project => <SingleProject project={project} />)}
    </div>

  </>

}

export default withRouter(Projects)