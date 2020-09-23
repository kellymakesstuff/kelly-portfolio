import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Main from './shared/Main'



function App() {

  let [currentHeader, setCurrentHeader] = useState({
    home: true,
    comeIn: null,
    projects: null,
    resume: null,
    about: null
  })

  let handleHeader = () => {
    let divDisplay = document.getElementsByClassName("home-msg")
    currentHeader.comeIn = true
    console.log(currentHeader)
  }

  return <>

    <script>
      AOS.init();
    </script>

    <div className="container-fluid">
      <Header />

      {/* <div className="home-msg col-8" data-aos="slide-up">
        <h1>Hi, I'm Kelly!</h1>
        <br />
        <h3>I am a true New Yorker who thrives in dynamic spaces.
        People, the teams they compose, and the things they create
        are my life-blood. I am a total software automation nerd,
        and love creating streamlined workflows, integrating
        systems as naturally as possible. I've been told that
   only 20% of my Excel jokes are un-punny.</h3>
        <br />

        <Link to="/main">
          <h2>COME ON IN!</h2>
        </Link>
      </div> */}


      <Main />
      {/* <Route path="/main">
        <Main />
      </Route> */}



    </div>

    <Footer />
  </>
}

export default App;
