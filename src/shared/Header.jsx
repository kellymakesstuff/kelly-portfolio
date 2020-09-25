import React from 'react'
import { withRouter } from 'react-router-dom'

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

    </div>

  </>
}
export default withRouter(Header)