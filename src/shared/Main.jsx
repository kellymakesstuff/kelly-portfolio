import React from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../shared/Nav'
import Screens from '../screens/Screens'

function Main() {

  return <>
    <Nav />
    <Screens />
  </>

}

export default withRouter(Main)