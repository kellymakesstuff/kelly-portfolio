import React from 'react'
import { Link, Route } from 'react-router-dom'


export default function Home({ currentHeader }, { setCurrentHeader }) {

  // let handleHeader = () => {
  //   currentHeader.comeIn = true
  //   console.log(currentHeader)
  // }


  return <>

    {/* <div className="home-msg col-8">
      <h1>Hi, I'm Kelly!</h1>
      <br />
      <h3>I am a true New Yorker who thrives in dynamic spaces.
      People, the teams they compose, and the things they create
      are my life-blood. I am a total software automation nerd,
      and love creating streamlined workflows, integrating
      systems as naturally as possible. I've been told that
   only 20% of my Excel jokes are un-punny.</h3>
      <br />

      <Link to="/projects" onClick={() => handleHeader()}>
        <h2>COME ON IN!</h2>
      </Link>
    </div> */}
  </>

}