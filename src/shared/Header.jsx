import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import HeaderImg from '../images/head_img@2x.png'

function Header() {


  return <>
    <script>
      AOS.init();
  </script>

    <div className="row" data-sos="top-center">
      <div className="col-12 header-img">
        <img className="header-img" src={HeaderImg} alt="Kelly Bergin" />
      </div></div>


  </>
}
export default withRouter(Header)