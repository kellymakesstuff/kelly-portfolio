import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Contact from './Contact'

function Screens() {
  return <>

    <Route path="/main/projects">
      <Projects />
    </Route>

    <Route path="/main/resume">
      <Resume />
    </Route>

    <Route path="/main/contact">
      <Contact />
    </Route>


  </>
}

export default withRouter(Screens)