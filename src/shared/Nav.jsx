import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

function Nav() {
  return (
    <div>

      <div className="menu-box col-12">

        <Link to="/main/projects">
          <h3>Projects</h3>
        </Link>

        <Link to="/main/resume">
          <h3>Resume</h3>
        </Link>

        <Link to="/main/aboutme">
          <h3>About Me</h3>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Nav)
