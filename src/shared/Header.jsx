import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

function Header() {


  return <>

    <div className="row col-12">
      <div className="name-overlay">
        <p className="title-text">kelly bergin, mfa</p>
        <p className="under-text">software engineer</p>
      </div>
      <div className="circle-one"></div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
      {/* <div className="col-12 header-img">
        {/* <img className="header-img" src={HeaderImg} alt="Kelly Bergin" /> */}
      {/* <div className="circle-one"></div>
    </div></div> * /} */}
    </div>

  </>
}
export default withRouter(Header)