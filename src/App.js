import React, { useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from './screens/Home'
import Main from './shared/Main'
import Projects from './screens/Projects'



function App() {

  return <>

    <script>
      AOS.init();
    </script>

    <div className="container-fluid">
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/main">
        <Main />
      </Route>

    </div>

    {/* 
    <Route path="/projects">
      <Projects />
    </Route> */}
    {/* 
    <Route path="/resume">
      <Resume />
    </Route>

    <Route path="/aboutme">
      <Aboutme />
    </Route> */}

    <Footer />
  </>
}

export default withRouter(App);
