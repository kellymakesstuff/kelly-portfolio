import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Aboutme from '../screens/Aboutme'

function Screens() {
  return <>

    <Route path="/main/projects">
      <Projects />
    </Route>

    <Route path="/main/resume">
      <Resume />
    </Route>

    <Route path="/main/aboutme">
      <Aboutme />
    </Route>


  </>
}

export default withRouter(Screens)