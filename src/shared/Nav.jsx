import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

function Nav() {

  let [headerShift, setHeaderShift] = useState({
    projects: false,
    resume: false,
    contact: false
  })

  let clickProjects = () => {
    setHeaderShift({
      projects: true,
      resume: false,
      contact: false
    })
    console.log("headerShift", headerShift)
  }

  let clickResume = () => {
    setHeaderShift({
      projects: false,
      resume: true,
      contact: false
    })
    console.log("headerShift", headerShift)
  }

  let clickContact = () => {
    setHeaderShift({
      projects: false,
      resume: false,
      contact: true
    })
    console.log("headerShift", headerShift)
  }

  let rendProjects = () => {
    if (headerShift.projects === true) {
      return <h1 className="sect-title" >Projects</h1>
    } else {
      return <h2>Projects</h2>
    }
  }

  let rendResume = () => {
    if (headerShift.resume === true) {
      return <h1 className="sect-title" >Resume</h1>
    } else {
      return <h2>Resume</h2>
    }
  }

  let rendContact = () => {
    if (headerShift.contact === true) {
      return <h1 className="sect-title" >Contact</h1>
    } else {
      return <h2>Contact</h2>
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

      <Link to="/main/contact" onClick={() => clickContact()}>
        {rendContact()}
      </Link>
    </div>
  </>

}

export default withRouter(Nav)
