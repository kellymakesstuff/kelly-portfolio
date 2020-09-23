import React, { useState } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

function Nav() {

  let [headerShift, setHeaderShift] = useState({
    projects: false,
    resume: false,
    about: false
  })

  let clickProjects = () => {
    setHeaderShift({
      projects: true,
      resume: false,
      about: false
    })
    console.log("headerShift", headerShift)
  }

  let clickResume = () => {
    setHeaderShift({
      projects: false,
      resume: true,
      about: false
    })
    console.log("headerShift", headerShift)
  }

  let clickAbout = () => {
    setHeaderShift({
      projects: false,
      resume: false,
      about: true
    })
    console.log("headerShift", headerShift)
  }

  let rendProjects = () => {
    if (headerShift.projects === true) {
      return <h1 className="sect-title" >Projects</h1>
    } else {
      return <h3>Projects</h3>
    }
  }

  let rendResume = () => {
    if (headerShift.resume === true) {
      return <h1 className="sect-title" >Resume</h1>
    } else {
      return <h3>Resume</h3>
    }
  }

  let rendAbout = () => {
    if (headerShift.about === true) {
      return <h1 className="sect-title" >About Me</h1>
    } else {
      return <h3>About Me</h3>
    }
  }

  return <>

    <div className="col-12 menu-box">

      <Link to="/main/projects" onClick={() => clickProjects()}>
        {rendProjects()}
      </Link>

      <Link to="/main/resume" onClick={() => clickResume()}>
        {rendResume()}
      </Link>

      <Link to="/main/aboutme" onClick={() => clickAbout()}>
        {rendAbout()}
      </Link>
    </div>
  </>

}

export default withRouter(Nav)
