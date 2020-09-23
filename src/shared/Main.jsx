import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Aboutme from '../screens/Aboutme'
import Header from '../shared/Header'

export default function Main({ currentHeader }, { setCurrentHeader }) {

  return <>

    <Route path="/" exact>
      <Home currentHeader={currentHeader} setCurrentHeader={setCurrentHeader} />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route path="/resume">
      <Resume />
    </Route>

    <Route path="/aboutme">
      <Aboutme />
    </Route>

  </>

}