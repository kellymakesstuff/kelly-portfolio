import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Home from '../screens/Home'
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'
import Aboutme from '../screens/Aboutme'
import Header from '../shared/Header'
import Nav from '../shared/Nav'
import Screens from '../screens/Screens'

function Main() {

  return <>
    <Nav />

    <Screens />
  </>

}

export default withRouter(Main)