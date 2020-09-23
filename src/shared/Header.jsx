import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import HeaderImg from '../images/head_img@2x.png'

function Header() {


  return <>

    <div className="row col-12">
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