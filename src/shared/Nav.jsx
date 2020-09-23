import React from 'react'

export default function Nav() {
  return (
    <div>

      <div className="menu-box col-12">

        <Link to="/projects">
          <h3>Projects</h3>
        </Link>

        <Link to="/resume">
          <h3>Resume</h3>
        </Link>

        <Link to="/aboutme">
          <h3>About Me</h3>
        </Link>
      </div>
    </div>
  )
}
