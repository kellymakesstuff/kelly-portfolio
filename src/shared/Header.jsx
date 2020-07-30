import React from 'react'
import { Link, Route } from 'react-router-dom'
import HeaderImg from '../images/head_img@2x.png'

export default function Header() {

  return <>
    <div className="row">
      <div className="col-12 header-img">
        <img className="header-img" src={HeaderImg} alt="Kelly Bergin" />
      </div></div>

    <div className="menu-box col-12">
      <Link to="/" exact>
        <h3>Home</h3>
      </Link>

      <Link to="/projects">
        <h3>Projects</h3>
      </Link>

      <Link to="/resume">
        <h3>Resume</h3>
      </Link>

      <Link to="/aboutme">
        <h3>About Me</h3>
      </Link>
    </div>

  </>
}