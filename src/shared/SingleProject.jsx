import React from 'react'
import { withRouter } from 'react-router-dom'

function SingleProject({ project }) {


  return <>
    <div>
      <div className="card col-5">
        <h4 className="card-title">{project.project}</h4>
        <img className="card-img-top col-12" src={project.img} alt={project.project} />
        <div className="card-body">
          <a target="new" href={project.deployed} className="btn btn-primary">see it live</a> <a href={project.github} target="new" className="btn btn-primary">see the code</a>
        </div>
      </div>

    </div>
  </>
}

export default withRouter(SingleProject)