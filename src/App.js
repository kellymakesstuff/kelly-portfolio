import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import 'aos/dist/aos.css';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './screens/Home';
import Main from './shared/Main';


function App() {

  return <>

    <div className="container-fluid">
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/main">
        <Main />
      </Route>

    </div>

    <Footer />
  </>
}

export default withRouter(App);
