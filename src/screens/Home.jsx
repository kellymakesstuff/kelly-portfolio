import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Main from '../shared/Main'


function Home() {

  return <>

    <div className="home-msg col-10">
      <h1>Hi, I'm Kelly!</h1>
      <br /><br /><br /><br />
      <h3>I am a true New Yorker who thrives in dynamic spaces.
      People, the teams they compose, and the things they create
      are my life-blood. I am a total software automation nerd,
      and love creating streamlined workflows, integrating
      systems as naturally as possible. I've been told that
   only 20% of my Excel jokes are un-punny.</h3>
      <br /><br /><br /><br />


      <Link to="/main">
        <h2>COME ON IN!</h2>
      </Link>
    </div>

  </>

}

export default withRouter(Home)