import React from 'react'

export default function singleProject({ project }) {


  return <>
    <div>
      <div class="card col-5">
        <h4 class="card-title">{project.project}</h4>
        <img class="card-img-top col-12" src={project.img} alt={project.project} />
        <div class="card-body">
          <a href={project.deployed} class="btn btn-primary">see it live</a> <a href={project.github} class="btn btn-primary">see the code</a>
        </div>
      </div>

    </div>
  </>
}
