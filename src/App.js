import React from 'react';
import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Main from './shared/Main'


function App() {
  return <>
    <div className="container-fluid">
      <Header />
      <Main />
      <Footer />
    </div>
  </>
}

export default App;
