import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Contact from './Contact'
import projectData from './projectData'


function Screens() {

  let [projects, setProjects] = useState(projectData)


  return <>

    <Route path="/main/projects">
      <Projects projects={projects} setProjects={setProjects} projDetail={projects} setProjDetail={setProjects} />
    </Route>

    <Route path="/main/resume">
      <Resume />
    </Route>

    <Route path="/main/contact">
      <Contact />
    </Route>

    <Route path="/main" exact>
      <div className="main-page">
        <h2>Navigate above to see some of my latest work!</h2>

      </div>
    </Route>


  </>
}

export default withRouter(Screens)