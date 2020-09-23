import React from 'react'
import { Link, Route } from 'react-router-dom'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Aboutme from '../screens/Aboutme'

export default function Screens() {
  return (
    <div>
      {/* <Route path="/" exact>
        <Home />
      </Route> */}

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

      <Route path="/aboutme">
        <Aboutme />
      </Route>
    </div>
  )
}
