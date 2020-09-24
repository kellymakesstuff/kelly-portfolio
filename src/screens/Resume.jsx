import React from 'react'
import { withRouter } from 'react-router-dom'

function Resume() {

  return <>
    <h1>Click Resume to Download (PDF)</h1>
    <a target="new" href="https://drive.google.com/file/d/10wuElptbwNenNRdg_eXywHJTjGFvVZ77/view?usp=sharing">
      {/* <img src={ResumeImg} alt="Kelly's Resume:" /> */}
    </a>

  </>

}

export default withRouter(Resume)